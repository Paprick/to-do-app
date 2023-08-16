import React from 'react'
import * as styled from './common-btn.styled';
import { Tooltip } from 'react-tooltip'

export const CommonBtn = ({children, active, tooltipText, buttonId, tooltipPlace, ...props}) => {

    return(
        <>
            <styled.Button 
                {...props}
                tabIndex={1}
                className={ `${active && 'active'}` }
                id={ buttonId }
            >
                {children}
            </styled.Button>
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