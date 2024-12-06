// Components
import ContentForm from "@/components/form/content-form";
import Guestbook from "@/components/macro/guestbook";
import { GuestbookSkeleton } from "@/components/macro/skeleton";
import BlurIn from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import SparklesText from "@/components/ui/sparkles-text";
import { TracingBeam } from "@/components/ui/tracing-beam";

// Utils
import { githubSignIn, googleSignIn, signOut } from "@/utils/function/fn";
import { createClient } from "@/utils/supabase/server";

// Icons
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";
import { FcGoogle } from "react-icons/fc";

const Page = async () => {
    const supabase = await createClient();
    const { data: user, error } = await supabase.auth.getUser();

    return (
        <TracingBeam>
            <section
                id="guestbook"
                className="flex w-full max-w-sm mx-auto grow flex-col gap-y-4 md:gap-y-8 lg:gap-y-12"
            >
                <BlurIn className="flex h-full w-full flex-col justify-center items-center">
                    <div className="md:pad-x relative flex h-auto flex-col">
                        <div className="relative pl-12 pr-8 sm:px-0 h-full w-full grow grid grid-cols-1 items-center justify-center gap-6 py-4 md:gap-8 md:py-6 lg:py-12">
                            {/* Login */}
                            <div className="group relative z-10 flex h-fit w-fit flex-col">
                                <div className="w-fit mb-4">
                                    <SparklesText text="Sign my guestbook" className="max-w-48" />
                                </div>
                                <p className="w-full mb-4 mt-2 body text-sm sm:text-base text-muted-foreground">
                                    Welcome my amazing guest, you can leave a message here!
                                </p>
                                {user && user.user ? (
                                    <>
                                        <ContentForm user={user.user} />
                                        <form onSubmit={signOut} className="mt-1">
                                            <Button
                                                type="submit"
                                                className="flex h-fit items-center justify-start gap-2 px-0 py-0 text-sm body hover:bg-transparent"
                                                variant={"ghost"}
                                            >
                                                Sign out
                                            </Button>
                                        </form>
                                    </>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <form onSubmit={githubSignIn} className="w-full">
                                            <Button
                                                type="submit"
                                                className="flex w-full items-center gap-2"
                                                variant={"outline"}
                                            >
                                                <GitHubLogoIcon className="h-4 w-4" /> Sign in with GitHub
                                            </Button>
                                        </form>
                                        <form onSubmit={googleSignIn} className="w-full">
                                            <Button
                                                type="submit"
                                                className="flex w-full items-center gap-2"
                                                variant={"outline"}
                                            >
                                                <FcGoogle className="h-4 w-4" /> Sign in with Google
                                            </Button>
                                        </form>
                                    </div>
                                )}
                            </div>
                            <Suspense fallback={<GuestbookSkeleton />}>
                                <Guestbook />
                            </Suspense>
                        </div>
                    </div>
                </BlurIn>
            </section>
        </TracingBeam>
    );
};
export default Page;