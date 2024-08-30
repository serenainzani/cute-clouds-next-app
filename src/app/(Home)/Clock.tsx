"use client";

import React, { useState, useEffect } from "react";

export default function Clock() {
    const [timeNow, setTimeNow] = useState(
        new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
        })
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeNow(
                new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                })
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return <p className="text-9xl">{timeNow}</p>;
}
