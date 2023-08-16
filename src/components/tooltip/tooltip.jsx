import { useState } from 'react'
import * as styled from './tooltip.styled'

export const ToolTip = ({ children, text }) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleMouseEnter = () => {
        setIsVisible(true)
    }
    const handleMouseLeave = () => {
        setIsVisible(false)
    }
    
    return (
        <styled.TooltipContainer onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } >
            { children }
            <styled.TooltipContent $visible= { isVisible }>
                {text}
            </styled.TooltipContent>
        </styled.TooltipContainer>
    )
}