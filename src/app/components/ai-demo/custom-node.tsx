import React from "react";
import { Handle, Position } from "@xyflow/react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Chip,
  Spinner,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import TypingText from "../typing-text";
import { EllipsisLoader } from "../ellipsis-loader";
import {
  Node1Title,
  Node1Content,
  Node1Icon,
  Node2Title,
  Node2Content,
  Node2Icon,
  Node3Title,
  Node3Content,
  Node3Icon,
  Node4Title,
  Node4Content,
  Node4Icon,
  NodeResultSrc,
} from "@/app/data/ai-demo";

export function PromptNode1() {
  return (
    <>
      <Card className="w-[240px]">
        <CardHeader className="flex items-center py-2 px-3 gap-2">
          <Icon icon={Node1Icon} className="" />
          <span className="text-sm">{Node1Title}</span>
        </CardHeader>
        <Divider />
        <CardBody>
          <Chip color="success" variant="dot">
            <span className="text-sm">{Node1Content}</span>
          </Chip>
        </CardBody>
      </Card>
      <div>
        <Handle type="source" position={Position.Right} id="a" />
      </div>
    </>
  );
}

export function PromptNode2() {
  return (
    <>
      <Card className="w-[240px]">
        <CardHeader className="flex items-center py-2 px-3 gap-2">
          <Icon icon={Node2Icon} className="" />
          <span className="text-sm">{Node2Title}</span>
        </CardHeader>
        <Divider />
        <CardBody>
          <span className="text-sm">{Node2Content}</span>
        </CardBody>
      </Card>
      <div>
        <Handle type="source" position={Position.Right} id="a" />
      </div>
    </>
  );
}

export function PromptNode3() {
  return (
    <>
      <Card className="w-[240px]">
        <CardHeader className="flex items-center py-2 px-3 gap-2">
          <Icon icon={Node3Icon} className="" />
          <span className="text-sm">{Node3Title}</span>
        </CardHeader>
        <Divider />
        <CardBody>
          <span className="text-sm">{Node3Content}</span>
        </CardBody>
      </Card>
      <div>
        <Handle type="source" position={Position.Right} id="a" />
      </div>
    </>
  );
}

export function PromptNode4() {
  return (
    <>
      <Card className="w-[240px]">
        <CardHeader className="flex items-center py-2 px-3 gap-2">
          <Icon icon={Node4Icon} className="" />
          <span className="text-sm">{Node4Title}</span>
        </CardHeader>
        <Divider />
        <CardBody>
          <span className="text-sm">{Node4Content}</span>
        </CardBody>
      </Card>
      <div>
        <Handle type="source" position={Position.Right} id="a" />
      </div>
    </>
  );
}

export function PromptNodeCenter() {
  return (
    <>
      <Card className="w-[240px]">
        <CardHeader className="flex items-center justify-center px-3 gap-2">
          <Icon icon="eos-icons:ai" className="" height="32" width="32" />
        </CardHeader>
        <CardBody className="flex">
          <div className="flex gap-3 items-center justify-center">
            <Spinner size="sm" color="primary" />
            <div className="flex gap-1 items-center">
              <span className="text-sm">Processing</span>
              <EllipsisLoader />
            </div>
          </div>
        </CardBody>
      </Card>
      <div>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} id="a" />
      </div>
    </>
  );
}

export function PromptNodeResult() {
  return (
    <>
      <Card className="w-[280px] h-[500px]">
        <div className="pointer-events-auto p-8">
          <div>
            <span className="text-lg font-semibold">Sample Content</span>
          </div>
          <TypingText
            text={Node2Content}
            speed={20}
            imageSrc="/images/digital-nomad.jpg"
            repeatDelay={3000}
            imageDelay={250}
          />
        </div>
      </Card>
      <div>
        <Handle type="target" position={Position.Left} />
      </div>
    </>
  );
}
