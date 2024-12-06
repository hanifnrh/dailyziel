"use client";

import { useCopyToClipboard } from "@/components/hooks/use-copy-to-clipboard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { useToast } from "./use-toast";

interface ButtonCopyProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textToCopy: string;
    successDuration?: number;
}

export default function ButtonCopy({
    className,
    textToCopy,
    successDuration = 1000,
    ...props
}: ButtonCopyProps) {
    const { isCopied, copyToClipboard } = useCopyToClipboard({
        timeout: successDuration,
    });
    const { toast } = useToast();
    const emailToCopy = "dailyziel@gmail.com";
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        if (isCopied) return;
        copyToClipboard(textToCopy);
        try {
            setCopied(true);
            toast({
                title: "Copied to Clipboard",
                description: `"${emailToCopy}" copied successfully.`,
            });
            setTimeout(() => setCopied(false), 3000);
        } catch (err) {
            console.error("Failed to copy:", err);
            toast({
                title: "Copy Failed",
                description: "Failed to copy text to clipboard.",
            });
        }
    }

    return (
        <Button
            className={cn(
                "min-w-40 relative group",
                "bg-emerald-50 dark:bg-emerald-950",
                "hover:bg-emerald-100 dark:hover:bg-emerald-900",
                "text-emerald-600 dark:text-emerald-300",
                "border border-emerald-200 dark:border-emerald-800",
                isCopied && "bg-emerald-100 dark:bg-emerald-900",
                className
            )}
            onClick={handleCopy}
            {...props}
        >
            <div
                className={cn(
                    "w-full flex items-center justify-center gap-2",
                    "transition-transform duration-200",
                    isCopied && "scale-105"
                )}
            >
                {isCopied ? (
                    <>
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>Copied!</span>
                    </>
                ) : (
                    <>
                        <Copy
                            className={cn(
                                "w-4 h-4 transition-transform duration-200",
                                "group-hover:scale-110"
                            )}
                        />
                        <span>Copy my email</span>
                    </>
                )}
            </div>
        </Button>
    );
}
