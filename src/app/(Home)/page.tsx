import Image from "next/image";
import WeatherIcon from "./WeatherIcon";
import LockIcon from "./LockIcon";
import BatteryIcon from "./BatteryIcon";
export default function Home() {
    return (
        <main>
            <div className="grid grid-cols-3 place-items-center pt-20">
                <WeatherIcon />
                <LockIcon />
                <BatteryIcon />
            </div>
        </main>
    );
}
