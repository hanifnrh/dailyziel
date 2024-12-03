import { githubSignIn, googleSignIn, signOut } from "@/app/supabase/functions";

import Image from "next/image";

import { User } from "@supabase/supabase-js";

import { Button } from "@/components/ui/button";

import ContentForm from "@/components/form/content-form";

const GuestbookForm = ({ user }: { user: User | null }) => {
    return (
        <div className="flex flex-col">
            {user ? (
                <div className="flex w-full flex-col gap-y-1">
                    <ContentForm />
                    <form onClick={signOut} className="">
                        <button type="submit" className="text-xs md:text-sm">
                            <p className="anim text-muted-foreground hover:text-foreground">
                                Sign out
                            </p>
                        </button>
                    </form>
                </div>
            ) : (
                <div className="flex flex-wrap items-center gap-3">
                    <form onClick={githubSignIn} className="flex flex-1">
                        <Button type="submit" className="flex w-full items-center gap-x-2">
                            <Image
                                src="/icons/github.png"
                                alt="GitHub Logo"
                                width={16}
                                height={16}
                            />
                            Sign in with GitHub
                        </Button>
                    </form>
                    <form onClick={googleSignIn} className="flex flex-1">
                        <Button type="submit" className="flex w-full items-center gap-x-2">
                            <Image
                                src="/icons/google.png"
                                alt="Google Logo"
                                width={16}
                                height={16}
                            />
                            Sign in with Google
                        </Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default GuestbookForm;