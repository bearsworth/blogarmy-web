import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimationData from "./command.json";

export default function HeroAnimation() {
  return (
    <div className="lg:w-[478px] lg:h-[304px] md:w-[430px] md:h-[274px] sm:w-[359px] sm:h-[228px] w-[287px] h-[182px]">
      <DotLottieReact
        data={AnimationData}
        loop
        autoplay
        speed={0.5}
        renderConfig={{
          autoResize: false,
        }}
      />
    </div>
  );
}
