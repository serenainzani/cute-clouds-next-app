import WeatherIcon from "./WeatherIcon";
import LockIcon from "./LockIcon";
import BatteryIcon from "./BatteryIcon";
import Clock from "./Clock";
import Profile from "./Profile";

export default function Home() {
    return (
        <main>
            <div className="flex justify-evenly items-center pt-20">
                <WeatherIcon />
                <LockIcon />
                <BatteryIcon />
            </div>
            <div className="flex justify-center pt-20">
                <Clock />
            </div>
            <div className="flex pt-20 justify-center items-center space-x-8">
                <Profile
                    name="Serena"
                    src="/serena-portrait-bg-removed.png"
                    size={150}
                />
                <Profile
                    name="Lynnie"
                    src="/lynnie-portrait-bg-removed.png"
                    size={185}
                />
            </div>
        </main>
    );
}
