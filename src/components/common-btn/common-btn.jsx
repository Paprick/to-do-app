import PropTypes from 'prop-types';
import * as styled from './common-btn.styled';

import { Tooltip } from 'react-tooltip'

export const CommonBtn = ({
        children, 
        active, 
        tooltipText, 
        id, 
        tooltipPlace,
        ariaLabel,
        ...props
    }) => {
    return(
        <>
            <styled.Button 
                {...props}
                className={ `${active && 'active'}` }
                id={ id }
                aria-label={ ariaLabel }
                aria-expanded={ active }
            >
                { children }
            </styled.Button>
            <Tooltip
                anchorSelect={ `#${ id }` }
                content={ tooltipText }
                place={ tooltipPlace }
                wrapper={ styled.StyledTooltip }
                offset={ 10 }  
            />         
    </>
    )
}
CommonBtn.propTypes = {
    children: PropTypes.any,
    active: PropTypes.bool,
    tooltipText: PropTypes.any,
    id: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.number
    ]).isRequired,
    tooltipPlace: PropTypes.string,
    ariaLabel: PropTypes.string
  };
