"use client";

import React from "react";
import { Button, Link, User, Input, Tooltip, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CompanyName, Domain } from "@/app/data/general";
import {
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
  sendSignInLinkToEmail,
} from "@firebase/auth";
import { LazyMotion, AnimatePresence, m, domAnimation } from "framer-motion";

import { auth } from "@/app/firebase/config";
import { AcmeIcon } from "./acme";
import { isDev } from "@/app/utils/checkAuth";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: isDev
    ? "http://localhost:3000/authorize"
    : `https://app.${Domain}/authorize`,
  // This must be true.
  handleCodeInApp: true,
  // The domain must be configured in Firebase Hosting and owned by the project.
  linkDomain: `app.${Domain}.com`,
};

export default function SignInComponent() {
  const [email, setEmail] = React.useState("");
  const [[page, direction], setPage] = React.useState([0, 0]);
  const [isEmailValid, setIsEmailValid] = React.useState(true);

  const Title = React.useCallback(
    (props: { children: React.ReactNode }) => (
      <m.h1
        animate={{ opacity: 1, x: 0 }}
        className="text-medium font-semibold"
        exit={{ opacity: 0, x: -10 }}
        initial={{ opacity: 0, x: -10 }}
      >
        {props.children}
      </m.h1>
    ),
    []
  );

  const titleContent = React.useMemo(() => {
    return page === 0
      ? "Email Magic Link"
      : page === 1
        ? "Magic Link Sent"
        : "Confirm Password";
  }, [page]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleEmailSubmit = async () => {
    if (!email.length) {
      setIsEmailValid(false);
      return;
    }
    setIsEmailValid(true);
    paginate(1);
    // perform the firebase email link
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
    } catch (error) {
      if (isDev) {
        console.log(error);
      }
    }
  };

  const handleGoBack = () => {
    paginate(-1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (page) {
      case 0:
        handleEmailSubmit();
        break;
      case 1:
        handleGoBack();
        break;
      default:
        break;
    }
  };

  const onGooglePress = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const authResult = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(authResult);
      const token = credential?.accessToken;
      if (isDev) {
        console.log(token);
      }
    } catch (error) {
      if (isDev) {
        console.log(error);
      }
    }
  };

  const onApplePress = async () => {
    const provider = new OAuthProvider("apple.com");
    provider.addScope("email");
    try {
      const authResult = await signInWithPopup(auth, provider);
      const credential = OAuthProvider.credentialFromResult(authResult);
      const token = credential?.accessToken;
      if (isDev) {
        console.log(token);
      }
    } catch (error) {
      if (isDev) {
        console.log(error);
      }
    }
  };

  //   const [isVisible, setIsVisible] = React.useState(false);

  //   const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="relative flex h-full min-h-192 w-full">
      {/* Left Side */}
      <div
        className="rounded-sm shadow-small relative hidden w-1/2 flex-col-reverse p-10 lg:flex"
        style={{
          backgroundImage:
            "url(https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/white-building.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-end gap-4">
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
            }}
            classNames={{
              base: "flex flex-row-reverse",
              name: "w-full text-right text-black",
              description: "text-black/80",
            }}
            description="Founder & CEO at ACME"
            name="Bruno Reichert"
          />
          <p className="w-full text-right text-2xl text-black/60">
            <span className="font-medium">“</span>
            <span className="font-normal italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
              augue nec massa volutpat aliquet.
            </span>
            <span className="font-medium">”</span>
          </p>
        </div>
      </div>
      {/* Right side Sign In Form*/}
      <div className="bg-background flex w-full mt-24 justify-center lg:w-1/2">
        <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
          <Link href="/">
            <div className="flex items-center">
              <AcmeIcon size={40} />
              <p className="font-medium font-semibold text-black dark:text-white">
                {CompanyName}
              </p>
            </div>
          </Link>
          <div className="w-full">
            <LazyMotion features={domAnimation}>
              <m.div className="flex min-h-[40px] items-center justify-between gap-2 pb-2">
                <AnimatePresence initial={false} mode="popLayout">
                  {page >= 1 && (
                    <m.div
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      initial={{ opacity: 0, x: -10 }}
                    >
                      <Tooltip content="Go back" delay={3000}>
                        <Button
                          isIconOnly
                          size="sm"
                          variant="flat"
                          onPress={() => paginate(-1)}
                        >
                          <Icon
                            className="text-default-500"
                            icon="solar:alt-arrow-left-linear"
                            width={16}
                          />
                        </Button>
                      </Tooltip>
                    </m.div>
                  )}
                </AnimatePresence>
                <AnimatePresence custom={direction} initial={false} mode="wait">
                  <Title>{titleContent}</Title>
                </AnimatePresence>
                {page >= 1 && (
                  <m.div
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    initial={{ opacity: 0, x: -10 }}
                  >
                    <Tooltip content="Go back" delay={3000}>
                      <Button
                        isIconOnly
                        size="sm"
                        className="bg-transparent"
                        onPress={() => paginate(-1)}
                      >
                        <Icon
                          className="text-transparent"
                          icon="solar:alt-arrow-left-linear"
                          width={16}
                        />
                      </Button>
                    </Tooltip>
                  </m.div>
                )}
              </m.div>
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <m.form
                  key={page}
                  animate="center"
                  className="flex flex-col gap-3"
                  custom={direction}
                  exit="exit"
                  initial="enter"
                  transition={{ duration: 0.2 }}
                  variants={variants}
                  onSubmit={handleSubmit}
                >
                  {page === 0 && (
                    <Input
                      autoFocus
                      isRequired
                      label="Email Address"
                      name="email"
                      type="email"
                      validationState={isEmailValid ? "valid" : "invalid"}
                      value={email}
                      onValueChange={(value) => {
                        setIsEmailValid(true);
                        setEmail(value);
                      }}
                    />
                  )}
                  {page === 1 && (
                    <div className="">
                      <div className="flex justify-center pb-4 pt-2">
                        <Icon
                          icon="icon-park-outline:magic-hat"
                          className="text-3xl "
                        />
                        <Icon
                          icon="icon-park-outline:magic"
                          className="text-3xl"
                        />
                      </div>

                      <p className="text-sm">
                        Please check your email or your email&apos;s spam
                        folder. You may close this once the magic happens.
                      </p>
                    </div>
                  )}
                  <Button fullWidth color="primary" type="submit">
                    {page === 0 ? "Continue with Email" : "Go Back"}
                  </Button>
                </m.form>
              </AnimatePresence>
            </LazyMotion>
          </div>

          <div className="flex w-full items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="text-tiny text-default-500 shrink-0">OR</p>
            <Divider className="flex-1" />
          </div>

          <div className="flex w-full flex-col gap-2">
            <Button
              startContent={<Icon icon="flat-color-icons:google" width={24} />}
              variant="bordered"
              onPress={onGooglePress}
            >
              Continue with Google
            </Button>
            <Button
              startContent={
                <Icon
                  className="dark:text-white text-black"
                  icon="ic:outline-apple"
                  width={24}
                />
              }
              variant="bordered"
              onPress={onApplePress}
            >
              Continue with Apple
            </Button>
          </div>

          {/* <div className="flex w-full items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="text-tiny text-default-500 shrink-0">OR</p>
            <Divider className="flex-1" />
          </div> */}

          <div>
            <span className="text-small">
              By continuing, I agree with the&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Terms
              </Link>
              &nbsp; and&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Privacy Policy
              </Link>
            </span>
          </div>

          {/* <form
            className="flex w-full flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              isRequired
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="underlined"
            />
            <Input
              isRequired
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="text-default-400 pointer-events-none text-2xl"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="text-default-400 pointer-events-none text-2xl"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Password"
              name="password"
              placeholder="Create a password"
              type={isVisible ? "text" : "password"}
              variant="underlined"
            />
            <Input
              isRequired
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              type={isVisible ? "text" : "password"}
              variant="underlined"
            />
            <Checkbox isRequired className="py-4" size="sm">
              I agree with the&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Terms
              </Link>
              &nbsp; and&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Privacy Policy
              </Link>
            </Checkbox>
            <Button color="primary" type="submit">
              Sign Up
            </Button>
          </form> */}

          <p className="text-small text-center">
            Automatic registration on Sign In
          </p>
        </div>
      </div>
    </div>
  );
}
