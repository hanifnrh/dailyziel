import { cn } from "@/lib/utils";
import Image from "next/image";

type CardContent = {
    title?: string;
    description?: string;
    image?: string; // URL gambar
    children?: React.ReactNode; // Konten tambahan (opsional)
};

const CardBody = ({ title, description, className = "p-4" }: Partial<CardContent> & { className?: string }) => (
    <div className={cn("text-left", className)}>
        {title && (
            <h3 className="text-lg mb-1 font-bold text-gray-900 dark:text-gray-100">
                {title}
            </h3>
        )}
        {description && (
            <p className="text-gray-700 dark:text-gray-300">
                {description}
            </p>
        )}
    </div>
);

export const SimpleCard_V5 = ({ image, children, title, description }: CardContent) => {
    return (
        <div className="border-[0.5px] border-zinc-300 rounded-sm p-2 dark:border-zinc-800">
            <div
                className={cn(
                    "border rounded-sm bg-gradient-to-br",
                    // light mode
                    "from-white to-zinc-200/60 border-zinc-300 shadow-[2px_0_8px_rgba(0,_0,_0,_0.15)]",
                    // dark mode
                    "dark:from-zinc-950 dark:to-zinc-900/60 dark:border-zinc-900/50 dark:shadow-inner"
                )}
            >
                {image ? (
                    <Image
                        src={image}
                        alt={title || "Card Image"}
                        className="w-full h-auto rounded-t-sm"
                        width={1000}
                        height={1000}
                    />
                ) : children ? (
                    <div>{children}</div>
                ) : (
                    <CardBody title={title} description={description} />
                )}
            </div>
        </div>
    );
};
