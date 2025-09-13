"use client";

import React, { useEffect, useState } from "react";

export const EllipsisLoader: React.FC = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[18px] h-[24px]">
      <span className="text-neutral-500 text-sm" aria-live="polite">
        {dots}
      </span>
    </div>
  );
};
