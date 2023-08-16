import React from 'react'
import { useDateNav } from '../../hooks/useDateNav'
import * as styled from './side-bar.styled'

import { Tooltip } from 'react-tooltip'

import PropTypes from 'prop-types';


export const SideBar = ({ selectDate, decrement, children, onKeyDown, handleSwipeLeftAnim, handleSwipeRightAnim, tooltipText, buttonId, tooltipPlace }) => {
    const defDecrement = decrement || false

    const handleDate = useDateNav(selectDate, defDecrement)

    const handleAnimation = () => {
        if(defDecrement) {
            handleSwipeRightAnim()
        } else {
            handleSwipeLeftAnim()
        }
    }
    

    return(
        <>
            <styled.SideBar
                onClick={ ()=> { handleDate(); handleAnimation(); } }
                onKeyDown={ onKeyDown }
                $decrement={ defDecrement }
                tabIndex={2}
                id={ buttonId }
            >
                { children }
            </styled.SideBar> 
            <Tooltip 
                anchorSelect={ `#${ buttonId }` }
                content={ tooltipText }
                place={ tooltipPlace }
                wrapper={styled.StyledTooltip}
                offset={10}
            />  
        </>
    )
}
SideBar.propTypes = {
    selectDate: PropTypes.func.isRequired,
  };
