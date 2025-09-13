"use client";

import { Image } from "@heroui/react";

import TestimonialComponent from "@/app/components/testimonials";

import CtaHero from "@/app/components/cta-hero";

import { CtaHero2 } from "@/app/data/cta-hero";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto mt-24 px-8 lg:px-0">
      <div>
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="text-lg leading-7 space-y-6">
          <p>
            Welcome to our SaaS platform! We are dedicated to providing
            top-notch solutions that empower businesses to achieve their goals
            efficiently and effectively.
          </p>
          <p>
            Our team is composed of passionate professionals with diverse
            expertise in technology, design, and customer service. We believe in
            innovation, collaboration, and continuous improvement to deliver the
            best possible experience for our users.
          </p>
          <p>
            Since our inception, we have been committed to helping businesses of
            all sizes streamline their operations, enhance productivity, and
            drive growth. Our platform is designed with user-friendliness and
            scalability in mind, ensuring that it can adapt to the evolving
            needs of our clients.
          </p>
          <p>
            We value transparency, integrity, and customer satisfaction above
            all else. Our support team is always ready to assist you with any
            queries or issues you may have.
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-12 h-96">
        <div className="w-1/3">
          <Image
            src="/images/about-engineer.jpg"
            alt="teamwork engineers"
            className="w-auto h-full object-cover"
          />
        </div>
        <div className="w-10/12">
          <Image
            src="/images/about-workers.jpg"
            alt="teamwork workers"
            className="w-auto h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold lg:mt-36">
          Feedback from our Awesome Customers
        </h1>
        <TestimonialComponent />
      </div>
      <div className="max-w-5xl bg-neutral-100 dark:bg-neutral-900 py-12 mx-auto rounded-2xl">
        <div className="flex mx-6">
          <div className="basis-12/12 sm:basis-6/12 flex flex-col justify-center items-center mx-0 sm:mx-auto">
            <CtaHero {...CtaHero2} />
          </div>
        </div>
      </div>
    </div>
  );
}
