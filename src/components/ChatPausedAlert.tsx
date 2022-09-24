import { useState } from 'react'
import { GiPauseButton } from 'react-icons/gi'
import { ImArrowDown2 } from 'react-icons/im'

const ChatPausedAlert = ({
    onClick: handleClick,
    className,
}: {
    onClick: () => void
    className?: string
}) => {
    const [isHovered, setIsHovered] = useState(false)

    const label = isHovered ? (
        <span className="inline-flex items-center">
            <ImArrowDown2 className="w-4 h-4 mr-2" />
            See new messages
        </span>
    ) : (
        <span className="inline-flex items-center">
            <GiPauseButton className="w-4 h-4 mr-2" />
            Chat paused due to scroll
        </span>
    )

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            className={`w-64 inline-flex justify-center px-4 py-2 rounded-lg bg-black/80 cursor-pointer ${className}`}
        >
            {label}
        </div>
    )
}

export default ChatPausedAlert
