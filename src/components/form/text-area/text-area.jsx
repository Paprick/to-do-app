import { useRef } from "react"
import PropTypes from "prop-types"
import * as styled from './text-area.styled'

import { useAutosize } from "./useAutosize"

export const TextArea = ({ 
        taskDetails, 
        detailsChange, 
        setIsTextboxFocused,
        id
    }) => {  
    const inputRef = useRef(null)

    const [
        shouldAnimate,
        handleFocus,
        handleBlur, 
        onChange
    ] = useAutosize(inputRef, taskDetails)

    const handleTextboxFocus = () =>{
        setIsTextboxFocused(true)
    }
    const handleTextboxBlur = () => {
        setIsTextboxFocused(false)
    }

    return(
        <styled.TexareaContainer
            id={ id }
            ref={ inputRef }
            value={ taskDetails }
            className={ `${shouldAnimate ? 'animate-textarea' : ''}` }
            placeholder={ 'New Task' }
            onChange={ (e) => {detailsChange(e); onChange();} }
            onFocus={ handleFocus }
            onBlur={ handleBlur }
            onMouseEnter={ ()=> { handleTextboxFocus(); } }
            onMouseOut={ ()=> { handleBlur(); handleTextboxBlur(); } }
            onTouchStart={ handleTextboxFocus }
            onTouchEnd={ handleTextboxBlur }
        >
        </styled.TexareaContainer>
    )
}
TextArea.propTypes = {
  detailsChange: PropTypes.func.isRequired,
  setIsTextboxFocused: PropTypes.func.isRequired,
  taskDetails: PropTypes.any
}