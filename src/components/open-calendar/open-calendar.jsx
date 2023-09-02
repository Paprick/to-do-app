import * as styled from './open-calendar.styled'
import PropTypes from 'prop-types';

import { CommonBtn } from "../common-btn/common-btn"
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

export const OpenCalendar = ({ toggleCalendar, setToggleCalendar }) => {
    const handleCalendarToggle = () => {
        setToggleCalendar(!toggleCalendar)
    }

    return (
        <CommonBtn
            id={'open-calendar-btn'}
            tooltipText={ 'Calendar' }
            tooltipPlace={ 'bottom' }
            ariaLabel={ 'Toggle calendar' }
            onClick={ handleCalendarToggle }
            active={ toggleCalendar }
        >
            <styled.StyledIcon icon={ faCalendar } size={ 'xl' }/>
        </CommonBtn>
    )
}
OpenCalendar.propTypes = {
    toggleCalendar: PropTypes.bool.isRequired,
    setToggleCalendar: PropTypes.func.isRequired
};
