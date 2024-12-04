// Clock.tsx

"use client";

import { useEffect, useState } from "react";

interface ClockProps {
    locale: string;
}

export default function Clock({ locale }: ClockProps): JSX.Element {
    const [date, setDate] = useState<Date | null>(null);
    const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ textAlign: "center" }}>
                <h2>{date ? days[date.getDay()] : "--"}</h2>
            </div>
            <div style={{ textAlign: "center", textTransform: "uppercase" }}>
                <h2>{date ? date.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" }) : "--"}</h2>
            </div>
        </div>
    );
}
