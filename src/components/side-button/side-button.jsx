import PropTypes from 'prop-types';
import * as styled from './side-button.styled'
import { Tooltip } from 'react-tooltip'
import { dateToStr } from '../../utils/dateToStr'

import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export const SideButton = ({ 
        onClick, 
        decrement = false, 
        onKeyDown, 
        date
    }) => {

    const dateOptions = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'   
    }

    const handleLabel = () => {
        const dateCopy = new Date(date)
        const dateLabel = decrement ? date.getDate() -1 : date.getDate() +1
        dateCopy.setDate(dateLabel)

        return dateToStr(dateCopy, undefined, dateOptions)
    }
    
    return(
        <>
            <styled.SideBar
                onClick={ onClick }
                onKeyDown={ onKeyDown }
                $decrement={ decrement }
                id={ `${decrement ? 'previous' : 'next'}-date-btn` }
                aria-label={ `Change date to ${handleLabel()}` }
            >
                <styled.StyledIcon 
                    icon={decrement ? faChevronLeft : faChevronRight}
                    size={'xl'}
                />
            </styled.SideBar> 
            <Tooltip 
                anchorSelect={ `#${decrement ? 'previous' : 'next'}-date-btn` }
                content={ handleLabel }
                place={ decrement ? 'right' : 'left' }
                wrapper={styled.StyledTooltip}
                offset={10}
            />  
        </>
    )
}
SideButton.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  decrement: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired
}
