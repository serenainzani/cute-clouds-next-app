import Image from "next/image";


interface ProfileProps {
    src: string;
    name: string;
    size: number;
}

export default function Profile({ src, name, size }: ProfileProps) {
    return (
        <div className="bg-white rounded-lg shadow-xl p-6 w-80 flex flex-col items-center text-center">
            <Image src={src} width={size} height={size} alt="pic of serena" />
            <h1 className="text-4xl font-semibold mb-4 text-pink-400 pt-5">
                {name}
            </h1>
            <p className="text-gray-700 ">she/her</p>
        </div>
    );
}
