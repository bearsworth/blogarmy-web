"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Spacer,
  Tab,
  Tabs,
} from "@heroui/react";
import { cn } from "@heroui/react";

import { FrequencyEnum } from "./pricing-types";
import { frequencies, tiers } from "./pricing-tiers";

export default function Component() {
  const [selectedFrequency, setSelectedFrequency] = useState(frequencies[0]);
  const [mounted, setMounted] = useState(false);

  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex((f) => f.key === selectedKey);

    setSelectedFrequency(frequencies[frequencyIndex]);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex max-w-5xl flex-col items-center py-24 mx-auto">
      <div className="flex max-w-xl flex-col text-center">
        <h2 className="text-primary font-medium">Pricing</h2>
        <h1 className="text-4xl font-medium tracking-tight">
          Get unlimited access.
        </h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">
          Discover the ideal plan, beginning at under $2 per week.
        </h2>
      </div>
      <Spacer y={8} />
      <Tabs
        classNames={{
          tab: "data-[hover-unselected=true]:opacity-90",
        }}
        radius="full"
        size="lg"
        onSelectionChange={onFrequencyChange}
      >
        <Tab
          key={FrequencyEnum.Monthly}
          aria-label="Pay Monthly"
          className="pr-1.5"
          title={
            <div className="pr-1">
              <p>Monthly</p>
            </div>
          }
        />
        <Tab
          key={FrequencyEnum.Yearly}
          title={
            <div className="flex items-center gap-2">
              <p>Annual</p>
              <Chip color="primary">Save 25%</Chip>
            </div>
          }
        />
      </Tabs>
      <Spacer y={12} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.key}
            className={cn("relative p-3", {
              "border-primary shadow-primary/20 border-2 shadow-2xl":
                tier.mostPopular,
              "border-medium! border-default-100 bg-transparent":
                !tier.mostPopular,
            })}
            shadow="none"
          >
            {tier.mostPopular ? (
              <Chip
                classNames={{
                  base: "absolute top-4 right-4",
                  content: "font-medium text-primary-500 dark:text-primary-600",
                }}
                color="primary"
                variant="flat"
              >
                Most Popular
              </Chip>
            ) : null}
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium">{tier.title}</h2>
              <p className="text-medium text-default-500">{tier.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="from-foreground to-foreground-600 inline bg-linear-to-br bg-clip-text text-4xl leading-7 font-semibold tracking-tight text-transparent">
                  {typeof tier.price === "string"
                    ? tier.price
                    : tier.price[selectedFrequency.key]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-small text-default-400 font-medium">
                    /{selectedFrequency.priceSuffix}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon className="text-primary" icon="ci:check" width={24} />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                as={Link}
                color={tier.buttonColor}
                href={tier.href}
                variant={tier.buttonVariant}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Spacer y={12} />
      <div className="flex py-2">
        <p className="text-default-400">
          Are you an open source developer?&nbsp;
          <Link color="foreground" href="#" underline="always">
            Get a discount
          </Link>
        </p>
      </div>
    </div>
  );
}
