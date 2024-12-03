// src/app/guestbook/page.tsx
'use client';  // Mark this as a client component

import { createClient } from "@/app/supabase/server"; // Import server-side Supabase client
import GuestbookForm from "@/components/form/guestbook-form";
import GuestbookSection from "@/components/section/guestbook-section";
import Paragraph from "@/components/ui/paragraph";
import { useEffect, useState } from "react";

const Page = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const supabase = await createClient();  // Ensure this is awaited properly

            try {
                const { data: user, error } = await supabase.auth.getUser();

                if (error) {
                    console.error("Error fetching user:", error.message);
                } else {
                    setUser(user);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, []);

    if (!user) {
        return (
            <section>
                <p>No user authenticated. Please log in.</p>
            </section>
        );
    }

    return (
        <section
            id="guestbook"
            className="flex h-auto grow flex-col items-center gap-y-16 px-4 md:gap-y-20 lg:gap-y-24"
        >
            <div className="flex flex-col gap-y-4">
                <Paragraph title="Guestbook">
                    <p>
                        Leave me a trace of your visit, could be a message, a quote, or a
                        song you'd want me to listen to.
                    </p>
                </Paragraph>
                <GuestbookForm user={user.user} />
            </div>
            <GuestbookSection />
        </section>
    );
};

export default Page;
