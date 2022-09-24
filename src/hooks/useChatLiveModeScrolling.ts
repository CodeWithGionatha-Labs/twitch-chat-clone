import { useCallback, useEffect, useRef, useState } from 'react'
import { MessageModel } from '../utils/models'

export default function useChatLiveModeScrolling<T extends HTMLElement>(
    messages: MessageModel[]
) {
    const [isLiveModeEnabled, setIsLiveModeEnabled] = useState(true)
    const chatMessagesBoxRef = useRef<T | null>(null)

    const scrollNewMessages = useCallback(() => {
        chatMessagesBoxRef.current?.lastElementChild?.scrollIntoView()
    }, [])

    const toggleLiveModeOnChatScroll = useCallback(() => {
        if (chatMessagesBoxRef.current) {
            const scrollHeight = chatMessagesBoxRef.current.scrollHeight
            const scrollTop = chatMessagesBoxRef.current.scrollTop
            const clientHeight = chatMessagesBoxRef.current.clientHeight

            const currentScroll = Math.ceil(clientHeight + scrollTop)
            const isChatScrolled = currentScroll !== scrollHeight

            setIsLiveModeEnabled(!isChatScrolled)
        }
    }, [])

    useEffect(() => {
        const ref = chatMessagesBoxRef.current
        ref?.addEventListener('scroll', toggleLiveModeOnChatScroll)
        return () =>
            ref?.removeEventListener('scroll', toggleLiveModeOnChatScroll)
    }, [toggleLiveModeOnChatScroll])

    useEffect(() => {
        if (isLiveModeEnabled) {
            scrollNewMessages()
        }
    }, [messages, isLiveModeEnabled, scrollNewMessages])

    return {
        chatMessagesBoxRef,
        isLiveModeEnabled,
        scrollNewMessages,
    }
}
