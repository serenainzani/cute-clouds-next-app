import {
    IconBattery1,
    IconBattery2,
    IconBattery3,
    IconBattery4,
    IconBatteryCharging,
} from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export default function BatteryIcon() {
    const [batteryLevel, setBatteryLevel] = useState(0.6);
    const [batteryCharging, setBatteryCharging] = useState(false);

    const setIcon = (batteryLevel, batteryCharging) => {
        if (batteryCharging) {
            return <IconBatteryCharging size={90} color={"white"} />;
        } else if (batteryLevel > 0.75) {
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
        async function getBatteryDetails() {
            if ("getBattery" in navigator) {
                const battery = await navigator.getBattery();
                setBatteryLevel(battery.level);
                setBatteryCharging(battery.charging);
                console.log(battery.charging);

                battery.addEventListener("levelchange", () => {
                    setBatteryLevel(battery.level);
                });

                battery.addEventListener("chargingchange", () => {
                    setBatteryCharging(battery.charging);
                });
            }
        }
        getBatteryDetails();
    }, []);

    return setIcon(batteryLevel, batteryCharging);
}
