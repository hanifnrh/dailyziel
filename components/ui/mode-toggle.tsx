"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    // Keyboard shortcut for toggling theme
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "d") {
                event.preventDefault();
                setTheme(theme === "light" ? "dark" : "light");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [theme, setTheme]);

    return (
        <Button
            variant="noborder"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {/* Both icons are rendered but toggle visibility based on theme */}
            <Sun
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
