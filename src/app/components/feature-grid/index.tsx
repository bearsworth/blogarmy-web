import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export const FeatureGrid: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Static Type Checking",
      description:
        "Identify errors in your code before execution through static analysis, enabling safer refactoring and better documentation.",
      icon: "lucide:check-circle",
    },
    {
      title: "IDE Support",
      description:
        "Enjoy rich IntelliSense, code navigation, and refactoring tools in your favorite editor with accurate code completion.",
      icon: "lucide:code",
    },
    {
      title: "ES6+ Features",
      description:
        "Use modern JavaScript features while targeting older environments through TypeScript's built-in transpilation.",
      icon: "lucide:arrow-up-circle",
    },
    {
      title: "Interface Definitions",
      description:
        "Define contracts between parts of your application with interfaces that enforce structure without runtime overhead.",
      icon: "lucide:layers",
    },
    {
      title: "Type Inference",
      description:
        "Let TypeScript automatically determine types when possible, reducing the need for explicit type annotations.",
      icon: "lucide:sparkles",
    },
    {
      title: "Generics",
      description:
        "Create reusable components that work with a variety of types rather than a single one, enabling type-safe flexibility.",
      icon: "lucide:box",
    },
    {
      title: "Advanced Types",
      description:
        "Leverage union types, intersection types, conditional types, and mapped types for complex type relationships.",
      icon: "lucide:puzzle",
    },
    {
      title: "Tooling Integration",
      description:
        "Seamlessly integrate with build tools like Webpack, Rollup, and Parcel for a modern development workflow.",
      icon: "lucide:wrench",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border border-default-200 transition-all duration-200"
        >
          <CardHeader className="flex flex-col gap-4 items-center my-2">
            <div className="flex flex-col items-center">
              <Icon
                icon={feature.icon}
                className="mb-2 text-success-600"
                height={32}
                width={32}
              />
              <span className="font-semibold">{feature.title}</span>
            </div>
          </CardHeader>
          <CardBody className="pt-0 text-default-500">
            <p>{feature.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
