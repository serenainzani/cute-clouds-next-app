import {
    IconBattery1,
    IconBattery2,
    IconBattery3,
    IconBattery4,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export default function BatteryIcon() {
    const [batteryLevel, setBatteryLevel] = useState(0.6);

    const batteryLevelForIcon = (batteryLevel) => {
        if (batteryLevel > 0.75) {
            return <IconBattery4 size={90} color={"white"} />;
        } else if (batteryLevel > 0.5) {
            return <IconBattery3 size={90} color={"white"} />;
        } else if (batteryLevel > 0.25) {
            return <IconBattery2 size={90} color={"white"} />;
        } else {
            return <IconBattery1 size={90} color={"white"} />;
        }
    };

    useEffect(() => {
        async function getBatteryLevel() {
            if ("getBattery" in navigator) {
                const battery = await navigator.getBattery();
                setBatteryLevel(battery.level);

                battery.addEventListener("levelchange", () => {
                    setBatteryLevel(battery.level);
                });
            }
        }
        getBatteryLevel();
    }, []);

    return batteryLevelForIcon(batteryLevel);
}
