import React, { useState, useEffect } from "react";

export const useWithScroll = () => {
    const [Ypos, setYPos] = useState(100)

    useEffect(() => {
        const handleScroll = () => {
            setYPos(window.scrollY)
        }
        window.addEventListener('scroll' , handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return [Ypos]
}