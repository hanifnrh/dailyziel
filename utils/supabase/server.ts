import { Database } from "@/lib/types/supabase";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

// Fungsi untuk membuat klien Supabase
export const createClient = async () => {
    const cookieStore = await cookies(); // Tambahkan `await` di sini

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                // Mengambil nilai cookie berdasarkan nama
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
                // Menetapkan nilai cookie berdasarkan nama, nilai, dan opsi
                set(name: string, value: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value, ...options });
                    } catch (error) {
                        // Penanganan error jika metode `set` dipanggil dari Server Component
                    }
                },
                // Menghapus cookie berdasarkan nama dan opsi
                remove(name: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value: "", ...options });
                    } catch (error) {
                        // Penanganan error jika metode `remove` dipanggil dari Server Component
                    }
                },
            },
        }
    );
};

// Fungsi untuk membuat klien Admin dengan akses lebih tinggi
export const createAdminClient = async () => {
    const cookieStore = await cookies(); // Tambahkan `await` di sini

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value, ...options });
                    } catch (error) {
                        // Penanganan error jika metode `set` dipanggil dari Server Component
                    }
                },
                remove(name: string, options: CookieOptions) {
                    try {
                        cookieStore.set({ name, value: "", ...options });
                    } catch (error) {
                        // Penanganan error jika metode `remove` dipanggil dari Server Component
                    }
                },
            },
        }
    );
};
