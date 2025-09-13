"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { Image as HeroImage } from "@heroui/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

import ShuffleHero from "../components/shuffle-hero";

import ValuesBar from "../components/valuesbar";
import CtaHero from "../components/cta-hero";
import { FeatureGrid } from "../components/feature-grid";
import AIDemo from "../components/ai-demo";
import SplitDemo from "../components/split-demo";
import FrontContainer from "../components/front-container";

import {
  MainMessage,
  MainSubMessage,
  Section1Title,
  Section1SubMessage,
  Section2Values,
  Section6Title,
  Section6SubMessage,
  Section4Title,
  Section4SubMessage,
} from "../data/home";
import { CtaHero1, CtaHero2 } from "../data/cta-hero";
import { SplitDemoData } from "../data/split-demo";

const PROFILE_IMAGE_COUNT = 5;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [profileImageArr] = useState(Array(5).fill(PROFILE_IMAGE_COUNT));
  const [starCount] = useState(Array(5).fill(5));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <FrontContainer>
      <div className="bg-neutral-100 dark:bg-neutral-950 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex mx-6">
            <div className="basis-12/12 sm:basis-5/12 flex flex-col justify-center items-center mx-0 sm:mx-auto">
              <div>
                <span className="text-3xl md:text-5xl font-bold">
                  {MainMessage}
                </span>
              </div>
              <div className="mt-8">
                <h5>{MainSubMessage}</h5>
              </div>
              <div>
                <Link href="/signin">
                  <Button className="mt-8" size="lg" color="primary">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="ml-6 hidden sm:block sm:basis-7/12">
              <ShuffleHero />
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden px-4 mt-4">
        <ShuffleHero />
      </div>
      <div className="flex flex-col items-center mt-14 max-w-5xl mx-auto ">
        <div className="flex gap-2 items-center">
          {profileImageArr.map((_, index) => {
            return (
              <div key={`profile-image-${index}`}>
                <HeroImage
                  alt={`Trusted User-${index}`}
                  src={`/images/profile-${index + 1}.jpg`}
                  width={42}
                  height={42}
                  radius="full"
                  className="border-1 border-neutral-500 p-1"
                />
              </div>
            );
          })}
          <div className="sm:flex hidden">
            {starCount.map((_, index) => {
              return (
                <Icon
                  key={`star-icon-${index}}`}
                  icon="weui:star-filled"
                  className="text-warning-500"
                  height={24}
                  width={24}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-2">
          <span className="text-md font-semibold">
            Trusted by 10k+ amazing users
          </span>
        </div>
      </div>
      <div className="sm:max-w-3xl max-w-5xl mx-auto">
        <div className="flex justify-center mt-16 px-5">
          <span className="text-4xl font-semibold">{Section1Title}</span>
        </div>
        <div className="flex justify-center mt-8 px-5">
          <span className="text-lg ">{Section1SubMessage}</span>
        </div>
      </div>
      <div className="mt-16 max-w-5xl mx-auto flex justify-center">
        <ValuesBar {...Section2Values} />
      </div>
      <div className="max-w-5xl bg-neutral-100 dark:bg-neutral-900 py-12 mt-24 mx-auto rounded-2xl">
        <div className="flex mx-6">
          <div className="basis-12/12 sm:basis-6/12 flex flex-col justify-center items-center mx-0 sm:mx-auto">
            <CtaHero {...CtaHero1} />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-16 flex flex-col items-center px-6">
        <div>
          <span className="text-4xl font-semibold">{Section4Title}</span>
        </div>
        <div className="mt-6">
          <span className="text-lg">{Section4SubMessage}</span>
        </div>
        <div className="mt-6">
          <FeatureGrid />
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-16">
        <div className="mt-12 bg-neutral-100 dark:bg-neutral-900 rounded-2xl">
          <AIDemo />
        </div>
      </div>
      <div className="w-full mt-16 flex justify-center">
        <div className="flex flex-col px-6 items-center w-full max-w-5xl">
          <div className="flex">
            <span className="text-4xl font-semibold">{Section6Title}</span>
          </div>
          <div className="mt-6 flex justify-center">
            <span className="text-lg">{Section6SubMessage}</span>
          </div>
          <div className="mt-6 w-full">
            <SplitDemo {...SplitDemoData} />
          </div>
        </div>
      </div>

      <div className="max-w-5xl bg-neutral-100 dark:bg-neutral-900 py-12 mt-24 mx-auto rounded-2xl mt-20">
        <div className="flex mx-6">
          <div className="basis-12/12 sm:basis-6/12 flex flex-col justify-center items-center mx-0 sm:mx-auto">
            <CtaHero {...CtaHero2} />
          </div>
        </div>
      </div>
    </FrontContainer>
  );
}
