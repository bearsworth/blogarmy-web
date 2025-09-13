"use client";

import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

import Orb from "../../components/bg-orb";

import { affiliateAccordionItems } from "../../data/affiliates";

export default function Affiliates() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col max-w-5xl items-center px-6">
        <div className="lg:relative flex flex-col items-center justify-center w-full">
          <div className="">
            <div className="hidden lg:block sm:w-[4xl]">
              <Orb
                size={800}
                hoverIntensity={0}
                rotateOnHover={false}
                hue={0}
                forceHoverState={false}
              />
            </div>
            <span className="lg:absolute inset-0 flex flex-col items-center justify-center text-2xl sm:text-4xl font-semibold mt-24 lg:mt-0">
              Start Earning Now
              <br />
              <br />
              <span className="text-medium lg:max-w-md w-[80%] font-normal">
                Join the future of AI and start earning 35% commission for every
                successful referral. No upfront costs and marketing materials
                provided.
              </span>
              <Button className="mt-12" color="primary" size="lg">
                Join Affiliate Program
              </Button>
            </span>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center">
            <span className="text-2xl sm:text-4xl">
              Getting started is <span className="font-semibold">Simple</span>
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardBody className="flex flex-col items-center p-8">
                <Icon icon="tabler:hand-click" className="text-4xl mb-4" />
                <span className="text-2xl font-semibold">1</span>
                <span className="mt-4 text-xl font-semibold">Sign Up</span>
                <span className="basis-0 mt-2 text-center">
                  Join hundreds of affiliates after signing up and get access to
                  your unique referral link.
                </span>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center p-8">
                <Icon
                  icon="icon-park-outline:form-one"
                  className="text-4xl mb-4"
                />
                <span className="text-2xl font-semibold">2</span>
                <span className="mt-4 text-xl font-semibold">Recommend</span>
                <span className="mt-2 text-center">
                  Share your unique referral link with your audience through
                  blogs, social media, or newsletters.
                </span>
              </CardBody>
            </Card>
            <Card>
              <CardBody className="flex flex-col items-center p-8">
                <Icon
                  icon="solar:money-bag-outline"
                  className="text-4xl mb-4"
                />
                <span className="text-2xl font-semibold">3</span>
                <span className="mt-4 text-xl font-semibold">Earn</span>
                <span className="mt-2 text-center">
                  Earn 35% commission for every successful referral. Join for a
                  limited time now!
                </span>
              </CardBody>
            </Card>
          </div>
        </div>
        <div>
          <div className="mt-12 lg:max-w-5xl w-full">
            <div className="w-full px-6 flex justify-center items-center">
              <span className="text-3xl">Frequently Asked Questions</span>
            </div>
            <div className="w-full px-6 lg:w-5xl flex flex-wrap">
              {affiliateAccordionItems.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="flex flex-col lg:w-1/2 w-[100%] mt-6 gap-2 pr-8"
                >
                  <div>
                    <span className="text-lg">{item.title}</span>
                  </div>
                  <div className="">
                    <span>{item.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
