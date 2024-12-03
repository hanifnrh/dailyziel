// src/app/supabase/server.ts
import { Database } from "@/app/supabase/types";
import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers"; // This is server-side only

const createServerClientWithKey = async (key: string) => {
    // Await cookies() to resolve the Promise before using it
    const cookieStore = await cookies();

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        key,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value, ...options });
                    } catch (error) {
                        // Handle error
                    }
                },
                remove(name: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value: "", ...options });
                    } catch (error) {
                        // Handle error
                    }
                },
            },
        },
    );
};

export const createClient = () => {
    return createServerClientWithKey(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
};

export const createAdminClient = () => {
    return createServerClientWithKey(process.env.SUPABASE_SERVICE_ROLE_KEY!);
};
