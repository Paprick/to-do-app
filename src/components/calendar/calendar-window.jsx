import React from 'react'

import * as styled from './calendar-window.styled'

export const CalendarWindow = ({ date, selectDate }) => {
    return (
        <styled.CalendarWrapper>
            <styled.StyledCalendar
                value={ date }
                onChange={ selectDate }
            />
        </styled.CalendarWrapper>
    )
}