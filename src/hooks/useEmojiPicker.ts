import { IEmojiPickerProps } from 'emoji-picker-react'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

export default function useEmojiPicker(
    handleEmojiPick: (emoji: string) => void
) {
    const [isOpen, setIsOpen] = useState(false)
    const pickerRef = useRef(null)

    const handleEmojiClick: IEmojiPickerProps['onEmojiClick'] = (
        _,
        { emoji }
    ) => {
        handleEmojiPick(emoji)
    }

    const toggleEmojiPicker: React.MouseEventHandler = () => {
        setIsOpen((isOpen) => !isOpen)
    }

    useOnClickOutside(pickerRef, () => {
        setIsOpen(false)
    })

    return {
        pickerRef,
        isOpen,
        toggleEmojiPicker,
        handleEmojiClick,
    }
}
