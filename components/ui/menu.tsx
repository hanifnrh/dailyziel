"use client";

import ButtonCopy from "@/components/ui/buttoncopy";
import Link from "next/link";
import React, { useEffect } from "react";
import ButtonBook from "./buttonbook";
import ButtonClose from "./buttonclose";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
import { useMenu } from "./menuprovider";
import { ModeToggle } from "./mode-toggle";

const Menu: React.FC = () => {
    const { isDialogOpen, closeMenu, openMenu } = useMenu();
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

    return (
        <Dialog open={isDialogOpen} onOpenChange={closeMenu}>
            <DialogContent className="body sm:max-w-md flex flex-col items-center justify-center">
                <DialogHeader>
                    <DialogTitle className="text-center">Menu</DialogTitle>
                    <DialogDescription className="text-center">Get in touch with me</DialogDescription>
                </DialogHeader>
                <div className="w-full flex flex-col items-center justify-center gap-y-2">
                    <div className="flex justify-center w-48">
                        {/* Use the Btn06 button */}
                        <ButtonCopy
                            textToCopy={emailToCopy}
                            successDuration={3000}
                            className="w-full max-w-xs"
                        />
                    </div>

                    <div className="flex items-center justify-center w-48">
                        <Link href="#contact" className="w-full">
                            <DialogClose asChild>
                                <ButtonBook
                                    className="w-full max-w-xs"
                                />
                            </DialogClose>
                        </Link>
                    </div>
                </div>

                <DialogDescription className="text-center">Toggle theme</DialogDescription>

                <div className="flex justify-center">
                    <ModeToggle />
                </div>
                <DialogFooter className="justify-center items-center w-48">
                    <DialogClose asChild>
                        <ButtonClose
                            className="w-full max-w-xs"
                        />
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default Menu;
