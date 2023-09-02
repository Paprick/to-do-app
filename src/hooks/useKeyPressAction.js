import  { useEffect, useRef } from 'react'

export const useKeyPressAction = (callback) => {
    const callbackRef = useRef(callback)
    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            callbackRef.current();
        }
    }
    return handleKeyPress
}