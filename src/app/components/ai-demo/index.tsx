import React, { useCallback } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Position,
} from "@xyflow/react";
import { useTheme } from "next-themes";
import type { Node, Edge } from "@xyflow/react";

import "./styles.css";

import {
  PromptNode1,
  PromptNode2,
  PromptNode3,
  PromptNode4,
  PromptNodeCenter,
  PromptNodeResult,
} from "./custom-node";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "prompt1",
    position: { x: 50, y: 25 },
    data: { label: "default style 2" },
    ...nodeDefaults,
  },
  {
    id: "2",
    type: "prompt2",
    position: { x: 50, y: 125 },
    data: { label: "default style 3" },
    ...nodeDefaults,
  },
  {
    id: "3",
    type: "prompt3",
    position: { x: 50, y: 360 },
    data: { label: "default style 4" },
    ...nodeDefaults,
  },
  {
    id: "4",
    type: "prompt4",
    position: { x: 50, y: 492 },
    data: { label: "default style 1" },
    ...nodeDefaults,
  },
  {
    id: "5",
    type: "promptcenter",
    position: { x: 390, y: 225 },
    data: { label: "default style 1" },
    ...nodeDefaults,
  },
  {
    id: "6",
    type: "promptresult",
    position: { x: 700, y: 50 },
    data: { label: "default style 1" },
    ...nodeDefaults,
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-1",
    source: "1",
    target: "5",
    animated: true,
  },
  {
    id: "e1-2",
    source: "2",
    target: "5",
    animated: true,
  },
  {
    id: "e1-3",
    source: "3",
    target: "5",
    animated: true,
  },
  {
    id: "e1-4",
    source: "4",
    target: "5",
    animated: true,
  },
  {
    id: "e1-6",
    source: "5",
    target: "6",
    animated: true,
  },
];

const AIDemo = () => {
  const { theme } = useTheme();
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const nodeTypes = {
    prompt1: PromptNode1,
    prompt2: PromptNode2,
    prompt3: PromptNode3,
    prompt4: PromptNode4,
    promptcenter: PromptNodeCenter,
    promptresult: PromptNodeResult,
  };

  const onConnect = useCallback(
    (params: Parameters<typeof addEdge>[0]) =>
      setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-[600px] w-full rounded-lg hidden lg:block">
      <ReactFlow
        nodeTypes={nodeTypes}
        colorMode={theme === "dark" ? "dark" : "light"}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        proOptions={{ hideAttribution: true }}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnDrag={false}
        panOnScroll={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      ></ReactFlow>
    </div>
  );
};

export default AIDemo;
