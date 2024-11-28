import Marquee from "@/components/ui/marquee";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { FaBootstrap, FaFigma, FaLaravel, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoVercel } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPhpmyadmin } from "react-icons/si";

const icons = [
    { Icon: RiNextjsFill, alt: "Next.js Logo" },
    { Icon: FaLaravel, alt: "Laravel Logo" },
    { Icon: GrMysql, alt: "MySQL Logo" },
    { Icon: DiDjango, alt: "Django Logo" },
    { Icon: RiTailwindCssFill, alt: "Tailwind CSS Logo" },
    { Icon: FaReact, alt: "React Logo" },
    { Icon: SiPhpmyadmin, alt: "phpMyAdmin Logo" },
    { Icon: BiLogoPostgresql, alt: "PostgreSQL Logo" },
    { Icon: IoLogoVercel, alt: "Vercel Logo" },
    { Icon: FaBootstrap, alt: "Bootstrap Logo" },
    { Icon: FaFigma, alt: "Figma Logo" },
];

export function BrandMarquee() {
    return (
        <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {icons.map(({ Icon, alt }, index) => (
                    <div key={index} className="flex items-center justify-center px-4">
                        <Icon title={alt} className="text-5xl" />
                    </div>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
