import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import { features } from "@/app/data/feature-grid";

export const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="border border-default-200 transition-all duration-200 py-2 px-2"
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
