"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ButtonClose({
    className,
    ...props
}: ButtonCloseProps) {
    return (
        <Button
            className={cn(
                "min-w-40 relative group",
                "bg-red-50 dark:bg-red-950",
                "hover:bg-red-100 dark:hover:bg-red-900",
                "text-red-600 dark:text-red-300",
                "border border-red-200 dark:border-red-800",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "w-full flex items-center justify-center gap-2",
                    "transition-transform duration-200 group-hover:scale-105"
                )}
            >
                <span>Close</span>
            </div>
        </Button>
    );
}
