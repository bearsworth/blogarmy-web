import { Button } from "@heroui/react";
import Link from "next/link";

interface CtaHeroProps {
  CtaHeroTitle: string;
  CtaHeroSubtitle: string;
  CtaHeroPrimaryCta: string;
  CtaHeroSecondaryCta: string;
}

export default function CtaHero(props: CtaHeroProps) {
  const {
    CtaHeroTitle,
    CtaHeroSubtitle,
    CtaHeroPrimaryCta,
    CtaHeroSecondaryCta,
  } = props;
  return (
    <div className="w-full flex flex-col gap-4">
      <div>
        <span className="text-3xl md:text-4xl font-bold text-center">
          {CtaHeroTitle}
        </span>
      </div>
      <div>
        <span>{CtaHeroSubtitle}</span>
      </div>
      {CtaHeroSecondaryCta && (
        <div>
          <Link href="/about">
            <Button color="default" className="w-full">
              {CtaHeroSecondaryCta}
            </Button>
          </Link>
        </div>
      )}
      <div>
        <Link href="/signin">
          <Button color="primary" className="w-full">
            {CtaHeroPrimaryCta}
          </Button>
        </Link>
      </div>
    </div>
  );
}
