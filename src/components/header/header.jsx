import { useState } from 'react'
import PropTypes from 'prop-types';
import * as styled from './header.styled'
import { dateToStr } from '../../utils/dateToStr'

import { CalendarDisplay } from '../calendar-display/calendar-display'
import { CreateNewTask } from '../create-new-task/create-new-task'
import { OpenCalendar } from '../open-calendar/open-calendar'

export const Header = ({ setTasks, dateStr, date, selectDate }) => {
    const [toggleCalendar, setToggleCalendar] = useState(false)
    const dateOptions = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'   
    }
    const fullDate = dateToStr(date, undefined, dateOptions)

    return(
        <>
            <styled.HeaderSection>
                <styled.Label>
                    { fullDate }
                </styled.Label>
                <OpenCalendar 
                    toggleCalendar={ toggleCalendar }
                    setToggleCalendar={ setToggleCalendar }
                />
                <CreateNewTask 
                    setTasks= { setTasks }
                    dateStr= { dateStr }
                />
            </styled.HeaderSection>
            { toggleCalendar &&
                <CalendarDisplay
                    date={ date }
                    selectDate={ selectDate }
                />
            }
        </>
        
    )
}
Header.propTypes = {
    setTasks: PropTypes.func.isRequired,
    dateStr: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    selectDate: PropTypes.func.isRequired
};
