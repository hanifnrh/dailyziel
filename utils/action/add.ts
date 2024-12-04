"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function addContent(formData: FormData, userId: string) {
    let content = formData.get("content") as string;

    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });

    if (!userId) {
        return { error: "User ID is required" };
    }

    if (content.length < 3) {
        return { error: "Content must be at least 3 characters" };
    } else if (content.length > 100) {
        return { error: "Content must be less than 100 characters" };
    }

    const { error } = await supabase.from("guestbook").insert([
        {
            content: content,
            user_id: userId,
        },
    ]);

    if (error) {
        return { error: "Error inserting data" };
    } else {
        revalidatePath("/guestbook");
        return { data: "Data inserted successfully" };
    }
}
