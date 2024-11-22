"use client";

import { GeistMono } from 'geist/font/mono';
import Link from "next/link";
import { useRef } from "react";
import { ModeToggle } from "./mode-toggle";

const EncodedText = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!?@#$%^&*()_+-=<>{}[]|/\\";
    const intervalRefs = useRef<{ [key: string]: number | undefined }>({});

    const onHover = (
        event: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    ) => {
        const targetElement = event.target as HTMLParagraphElement;
        const originalText = targetElement.dataset.value || "";
        let currentIteration = 0;

        if (intervalRefs.current[originalText])
            clearInterval(intervalRefs.current[originalText]);

        const newIntervalId = window.setInterval(() => {
            const newText = originalText
                .split("")
                .map((char, idx) => {
                    if (idx < currentIteration) {
                        return originalText[idx];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            targetElement.innerText = newText;

            if (currentIteration >= originalText.length) {
                if (newIntervalId) clearInterval(newIntervalId);
            }

            currentIteration += 1 / 3;
        }, 30);

        intervalRefs.current[originalText] = newIntervalId;
    };

    return (
        <div  className={`${GeistMono.className} flex flex-col md:flex-row gap-x-5 gap-y-3 items-center`}>
            <Link href="#about">
                <p
                    data-value="About"
                    onMouseOver={onHover}
                    className="cursor-pointer uppercase text-muted-foreground hover:text-foreground"
                >
                    ABOUT
                </p>
            </Link>
            <Link href="#projects">
                <p
                    data-value="Projects"
                    onMouseOver={onHover}
                    className="cursor-pointer uppercase text-muted-foreground hover:text-foreground"
                >
                    PROJECTS
                </p>
            </Link>
            <Link href="#services">
                <p
                    data-value="services"
                    onMouseOver={onHover}
                    className="cursor-pointer uppercase text-muted-foreground hover:text-foreground"
                >
                    SERVICES
                </p>
            </Link>
            <Link href="#contact">
                <p
                    data-value="contact"
                    onMouseOver={onHover}
                    className="cursor-pointer uppercase text-muted-foreground hover:text-foreground"
                >
                    CONTACT
                </p>
            </Link>
            
            <ModeToggle></ModeToggle>

        </div>
    );
};

export default EncodedText;