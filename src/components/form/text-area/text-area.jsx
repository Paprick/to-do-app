import React, { useRef } from "react"
import * as styled from './text-area.styled'

export const TextArea = ({ 
        taskDetails, 
        detailsChange, 
        onFocus, 
        onBlur, 
        expanded, 
        scrollheight, 
        textSelectStart, 
        textSelectEnd 
    }) => {  

    const inputRef = useRef(null)

    const handleBlur = () => {
        onBlur()
        inputRef.current.blur()
    }

    return(
        <styled.TexareaContainer
            ref={inputRef}
            value={ taskDetails }
            placeholder={ 'New Task' }
            onChange={ (e) => { detailsChange(e); onFocus(e); } }
            onFocus={ onFocus }
            onBlur={ onBlur }
            onMouseEnter={ (e)=> { onFocus(e); textSelectStart(); } }
            onMouseOut={ ()=> { handleBlur(); textSelectEnd(); } }
            $expanded={ expanded }
            scrollheight={ scrollheight }
            onTouchStart={ textSelectStart }
            onTouchEnd={ textSelectEnd }
        >

        </styled.TexareaContainer>
    )
}