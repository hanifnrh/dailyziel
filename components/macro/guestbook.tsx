import { createAdminClient } from "@/utils/supabase/server";
import Image from "next/image";

const GuestbookCard = async ({
    content,
    user_id,
    createdAt,
    index,
}: {
    content: string;
    user_id: string;
    createdAt: string;
    index?: number;
}) => {
    const supabase = await createAdminClient();

    // Ambil data user berdasarkan user_id
    const { data: user, error } = await supabase.auth.admin.getUserById(user_id);

    // Log error jika ada masalah mengambil data pengguna
    if (error) {
        console.error("Error fetching user:", error);
    }

    const formatTimestamp = (timestamp: string) => {
        const currentDate = new Date();
        const createdAtDate = new Date(timestamp);

        const timeDiff = currentDate.getTime() - createdAtDate.getTime();
        const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
        const daysDiff = Math.floor(hoursDiff / 24);

        if (daysDiff > 1) {
            return `${daysDiff} days ago`;
        } else if (daysDiff === 1) {
            return "yesterday";
        } else if (hoursDiff > 0) {
            return `${hoursDiff} hours ago`;
        } else {
            return "less than an hour ago";
        }
    };

    // Menangani kemungkinan jika data avatar atau nama tidak tersedia
    const user_avatar = user?.user?.user_metadata?.avatar_url || "/default-avatar.png";
    const full_name = user?.user?.user_metadata?.full_name || "Anonymous";

    return (
        <div className="group relative z-10 flex h-full w-full flex-col gap-y-2">
            <div className="flex w-full items-center gap-4">
                <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-secondary md:h-10 md:w-10">
                    <Image
                        src={user_avatar}
                        alt={full_name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-xs body md:text-sm">{full_name}</p>
                    <p className="text-xs text-muted-foreground body-light">{formatTimestamp(createdAt)}</p>
                </div>
            </div>
            <code className="h-auto body-light">{content}</code>
        </div>
    );
};

const Guestbook = async () => {
    const supabase = await createAdminClient();
    const { data: guestbook, error } = await supabase.from("guestbook").select("*");

    if (error) {
        console.error("Error fetching guestbook:", error);
    }

    return (
        <div className="flex h-fit w-full flex-col-reverse gap-6 md:gap-8">
            {/* Content */}
            {guestbook &&
                guestbook.map((item, index) => (
                    <GuestbookCard
                        content={item.content}
                        user_id={item.user_id as string}
                        key={index}
                        createdAt={item.created_at as string}
                        index={index}
                    />
                ))}
        </div>
    );
};

export default Guestbook;
