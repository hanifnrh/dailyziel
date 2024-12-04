"use client";

import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { Button } from "./button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
import { useMenu } from "./menuprovider"; // Import context
import { ModeToggle } from "./mode-toggle";
import { useToast } from "./use-toast";

const Menu: React.FC = () => {
    const { isDialogOpen, closeMenu, openMenu } = useMenu(); // Access state from context
    const { toast } = useToast();
    const [copied, setCopied] = useState(false);
    const emailToCopy = "dailyziel@gmail.com";

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "q") {
                openMenu();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [openMenu]);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(emailToCopy);
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
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={closeMenu}>
            <DialogContent className="body sm:max-w-md flex flex-col">
                <DialogHeader>
                    <DialogTitle className="text-center">Menu</DialogTitle>
                    <DialogDescription className="text-center">Get in touch with me</DialogDescription>
                </DialogHeader>
                <div className="w-full flex flex-col items-center justify-center gap-y-2">
                    <div className="flex justify-center w-48">
                        <Button
                            variant="outline"
                            className="body-light w-full max-w-xs justify-center"
                            onClick={copyToClipboard}
                        >
                            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Copy my email
                        </Button>
                    </div>

                    <div className="flex justify-center w-48">
                        <Link href="#contact">
                            <DialogClose asChild>
                                <Button variant="outline" className="body-light w-full max-w-xs justify-center">
                                    <IoIosCalendar className="mr-2 h-4 w-4" /> Book my service
                                </Button>
                            </DialogClose>
                        </Link>
                    </div>
                </div>

                <DialogDescription className="text-center">Toggle theme</DialogDescription>

                <div className="flex justify-center">
                    <ModeToggle />
                </div>
                <DialogFooter className="sm:justify-center">
                    <DialogClose asChild>
                        <Button variant={"purple"} type="button">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Menu;
