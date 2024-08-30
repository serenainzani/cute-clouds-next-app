import Image from "next/image";

export default function Clock() {
    const timeNow = new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
    });
    return (
        <div className="bg-white rounded-xl shadow-md p-6 w-80 mx-auto flex flex-col items-center text-center">
            <Image
                src="/serena-portrait-bg-removed.png"
                width={150}
                height={150}
                alt="pic of serena"
            />
            <h1 className="text-4xl font-semibold mb-4 text-pink-400 pt-5">
                Serena Inzani
            </h1>
            <p className="text-gray-700 ">she/her</p>
        </div>
    );
}
