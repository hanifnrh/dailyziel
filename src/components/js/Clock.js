"use client"; // Tambahkan ini di bagian paling atas

import { useEffect, useState } from "react";

export default function Clock(props) {
    const [date, setDate] = useState(null);
    const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

    useEffect(() => {
        // update the date once every second
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            // clean up the effect
            clearInterval(timerId);
        };
    }, []);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem"}}>
            <div style={{ textAlign: "center" }}>
                <h2>{days[date?.getDay()]}</h2>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2>
                    {date?.getHours() < 10 ? "0" + date?.getHours() : date?.getHours()}
                </h2>
            </div>
            <div>
                <p>:</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <h2>
                    {date?.getMinutes() < 10 ? "0" + date?.getMinutes() : date?.getMinutes()}
                </h2>
            </div>
        </div>
    );
}
