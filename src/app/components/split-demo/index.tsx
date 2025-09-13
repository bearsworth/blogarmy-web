"use client";

export interface SplitDemoProps {
  leftTitle: string;
  rightTitle: string;
  leftSubtitle?: string;
  rightSubtitle?: string;
  leftProps?: string;
  rightProps?: string;
}

export default function SplitDemo(props: SplitDemoProps) {
  const {
    leftTitle,
    rightTitle,
    leftSubtitle,
    rightSubtitle,
    leftProps,
    rightProps,
  } = props;

  return (
    <div className="flex">
      {/* Left Example */}
      <div
        className={`hidden md:flex w-1/2 aspect-square flex-col items-center ${leftProps} py-8`}
      >
        <span className="text-2xl font-semibold">{leftTitle}</span>
        {leftSubtitle && <span className="text-md">{leftSubtitle}</span>}
      </div>
      {/* Right Example */}
      <div
        className={`hidden md:flex w-1/2 aspect-square flex-col items-center ${rightProps} py-8`}
      >
        <span className="text-2xl font-semibold">{rightTitle}</span>
        {rightSubtitle && <span className="text-md">{rightSubtitle}</span>}
      </div>
      {/* Stacked layout for small screens */}
      <div className="w-full md:hidden flex flex-col gap-8">
        <div
          className={`w-full aspect-square flex flex-col items-center ${leftProps} py-8`}
        >
          <span className="text-2xl font-semibold">{leftTitle}</span>
          {leftSubtitle && <span className="text-lg">{leftSubtitle}</span>}
        </div>

        <div
          className={`w-full aspect-square flex flex-col items-center ${rightProps} py-8`}
        >
          <span className="text-2xl font-semibold">{rightTitle}</span>
          {rightSubtitle && <span className="text-lg">{rightSubtitle}</span>}
        </div>
      </div>
    </div>
  );
}
