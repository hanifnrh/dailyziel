"use client"
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import BlurIn from "@/components/ui/blur-in";
import { Cover } from "@/components/ui/cover";
import Particles from "@/components/ui/particles";
import ShimmerButton from "@/components/ui/shimmer-button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const initialColor = resolvedTheme === "dark" ? "#ffffff" : "#ae04ba";
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#ae04ba");
  }, [resolvedTheme]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
        <div className="h-[40rem] -mb-96 -mt-80 flex items-center justify-center">
          <TextHoverEffect text="ZIEL" />
        </div>
        <div>
          <BlurIn
            className="text-4xl md:text-4xl lg:text-6xl title-head max-w-7xl mx-auto text-center relative z-10 py-6 bg-clip-text text-transparent bg-[linear-gradient(107deg,#000000_1.10%,#000000_60.18%,#ae04ba_105.75%)] dark:from-neutral-800 dark:via-white dark:to-white"
          >
            Build extraordinary websites <br /> with me <Cover>running</Cover> in no time
          </BlurIn>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ShimmerButton className="body shadow-2xl h-full">
            <span className="whitespace-pre-wrap text-center text-sm leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Get started
            </span>
          </ShimmerButton>
          <AnimatedGradientText className="h-full lg:text-lg">
            🔮
            <span
              className={cn(
                `body h-full inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Github
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 justify-center body-light"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <kbd className="mr-1 p-1 pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-purple-100 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>D
            </kbd>
            Theme
          </a>
          <a
            className="flex items-center gap-2 justify-center body-light"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <kbd className="mr-1 p-1 pointer-events-none inline-flex h-fit select-none items-center gap-1 rounded border bg-purple-100 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>Q
            </kbd>
            Menu
          </a>
        </div>
      </main>
    </div>
  );
}
