"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface ButtonBookProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ButtonBook({
    className,
    ...props
}: ButtonBookProps) {
    return (
        <Button
            className={cn(
                "min-w-40 relative group",
                "bg-indigo-50 dark:bg-indigo-950",
                "hover:bg-indigo-100 dark:hover:bg-indigo-900",
                "text-indigo-600 dark:text-indigo-300",
                "border border-indigo-200 dark:border-indigo-800",
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
                <Calendar
                    className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        "group-hover:scale-110"
                    )}
                />
                <span>Book my service</span>
            </div>
        </Button>
    );
}
