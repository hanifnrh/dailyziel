import { FloatingDock } from "@/components/ui/floating-dock";
import { FaBehance, FaDribbble, FaGithub, FaInstagram } from "react-icons/fa";

export function SocialsDock() {
    const links = [
        {
            title: "Github",
            icon: (
                <FaGithub className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/hanifnrh",
            target: "_blank"
        },

        {
            title: "Instagram",
            icon: (
                <FaInstagram className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/ziel.dev/",
            target: "_blank"
        },
        {
            title: "Behance",
            icon: (
                <FaBehance className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.behance.net/dailyziel",
            target: "_blank"
        },
        {
            title: "Dribbble",
            icon: (
                <FaDribbble className="h-8 w-8 text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://dribbble.com/dailyziel",
            target: "_blank"
        },
    ];

    return (
        <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
        />
    );
}
