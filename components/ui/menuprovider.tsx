"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface MenuContextProps {
    isDialogOpen: boolean;
    openMenu: () => void;
    closeMenu: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openMenu = () => setIsDialogOpen(true);
    const closeMenu = () => setIsDialogOpen(false);

    return (
        <MenuContext.Provider value={{ isDialogOpen, openMenu, closeMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }
    return context;
};
