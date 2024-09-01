import { IconLock, IconLockOpen } from "@tabler/icons-react";
import { useState } from "react";

export default function LockIcon() {
    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState(<IconLock size={108} color={"white"} />);

    const handleClick = () => {
        setIcon(
            isOpen ? (
                <IconLock size={108} color={"white"} />
            ) : (
                <IconLockOpen size={108} color={"white"} />
            )
        );
        setIsOpen(!isOpen);
    };

    return <button onClick={handleClick}>{icon}</button>;
}
