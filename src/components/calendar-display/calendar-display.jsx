import PropTypes from 'prop-types';
import * as styled from './calendar-display.styled'

export const CalendarDisplay = ({ date, selectDate }) => {
    return (
        <styled.CalendarWrapper>
            <styled.StyledCalendar
                value={ date }
                onChange={ selectDate }
            />
        </styled.CalendarWrapper>
    )
}
CalendarDisplay.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    selectDate: PropTypes.func.isRequired
};
