"use client";

import React from "react";
import Link from "next/link";

import { CompanyName, CompanyDescription } from "@/app/data/general";
import { FooterLinks } from "@/app/data/footer";

export default function Footer() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-950 pt-16 sm:pt-24 pb-24 sm:pb-32 mt-24 px-8">
      <div className="max-w-5xl mx-auto flex flex-wrap">
        <div className="basis-12/12 sm:basis-6/12 flex flex-col gap-4">
          <span className="text-2xl font-semibold">{CompanyName}</span>
          <span>{CompanyDescription}</span>
          <span className="text-sm text-neutral-500">
            Copyright © {new Date().getFullYear()} {CompanyName}
          </span>
        </div>
        <div className="basis-6/12 sm:basis-3/12 mt-8 sm:mt-0">
          <ul className="">
            {FooterLinks.filter((item) => item.column === 1).map(
              (item, idx) => (
                <li key={idx} className="my-2">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="basis-6/12 sm:basis-3/12 mt-8 sm:mt-0">
          <ul>
            {FooterLinks.filter((item) => item.column === 2).map(
              (item, idx) => (
                <li key={idx} className="my-2">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
