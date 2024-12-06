import { useCallback, useState } from "react";

interface UseCopyToClipboardProps {
    timeout?: number; // Waktu untuk reset status "Copied"
}

export function useCopyToClipboard({ timeout = 2000 }: UseCopyToClipboardProps = {}) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = useCallback(async (text: string) => {
        if (!navigator?.clipboard) {
            console.warn("Clipboard not supported");
            return false;
        }

        try {
            await navigator.clipboard.writeText("dailyziel@gmail.com");
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), timeout);
            return true;
        } catch (error) {
            console.warn("Copy failed", error);
            setIsCopied(false);
            return false;
        }
    }, [timeout]);

    return { isCopied, copyToClipboard };
}
