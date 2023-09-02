import { useState, useEffect } from "react";

export const useAutosize = (ref, value) => {
    const [isFocused, setIsFocused] = useState(false)
    const [shouldAnimate, setShouldAnimate] = useState(true)

    const handleFocus = () => {
        setIsFocused(true)
        setShouldAnimate(true)
    }
    const handleBlur = () => {
        setIsFocused(false)
        ref.current.blur()
        setShouldAnimate(true)
    }

    const onChange = () => {
        setShouldAnimate(false)
    } 


    // Set scrollheight if focused
    useEffect(() => {
        if(ref) {
            const { style } = ref.current
            if (isFocused) {
                style.height = '59px';
                const scrollHeight = ref.current.scrollHeight
                const maxScrollHeight = scrollHeight > 200 ? 200 : scrollHeight 
                style.height = `${maxScrollHeight + 4}px`
            } else {
                style.height = '59px';
            }
        }
    }, [ref, value, isFocused])

    return [shouldAnimate, handleFocus, handleBlur, onChange]
}