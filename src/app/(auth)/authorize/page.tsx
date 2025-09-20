"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase/config";
import { signInWithEmailLink, isSignInWithEmailLink } from "@firebase/auth";

import { isDev } from "@/app/utils/checkAuth";

export default function AuthorizePage() {
  const router = useRouter();

  useEffect(() => {
    const verifyEmailLink = async () => {
      if (typeof window === "undefined") return;
      const email = window.localStorage.getItem("emailForSignIn");
      const url = window.location.href;
      if (!email) {
        // Optionally, prompt for email if not found
        alert("No email found for sign-in. Please try again.");
        router.replace("/signin");
        return;
      }
      if (isSignInWithEmailLink(auth, url)) {
        try {
          await signInWithEmailLink(auth, email, url);
          window.localStorage.removeItem("emailForSignIn");
          router.replace("/dashboard");
        } catch (error) {
          if (isDev) {
            console.log(error);
            alert("Failed to authorize. Please try again.");
          }
          router.replace("/signin");
        }
      } else {
        router.replace("/signin");
      }
    };
    verifyEmailLink();
  }, [router]);

  // test comment

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Authorizing...</h1>
        <p>Please wait while we verify your email link.</p>
      </div>
    </div>
  );
}
