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
            <div className="flex justify-center pt-20">
                <Profile />
            </div>
        </main>
    );
}
