import React, { useCallback, useState } from 'react'
import * as styled from './header.styled'

import { CommonBtn } from '../../components/common-btn/common-btn'
import { CalendarWindow } from '../calendar/calendar-window'

import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


export const Header = ({ newTask, dateStr, date, selectDate }) => {
    const [toggleCalendar, setToggleCalendar] = useState(false)
    const handleCalendarToggle = () => {
        setToggleCalendar(!toggleCalendar)
    }

    const handleNewTask = useCallback(() => {

        newTask((prevState) => {
            const prevTasks = { ...prevState }
            const firstCheckedItem = prevTasks[dateStr] && prevTasks[dateStr].findIndex((item) => item.checked)

            if(prevTasks[dateStr]) {
                if (firstCheckedItem !== -1) {
                    const tasksForDate = [ ...prevTasks[dateStr] ]
                    tasksForDate.splice(firstCheckedItem, 0, { id: prevTasks[dateStr].length + 1, details: '', checked: false })
                    prevTasks[dateStr] = tasksForDate
                } else {
                    prevTasks[dateStr] = [...prevTasks[dateStr], { id: prevTasks[dateStr].length + 1, details: '', checked: false }]
                }       
            } else {
                prevTasks[dateStr] = [{ id: 1, details: '', checked: false }]
            }
            return prevTasks
        })
        
    }, [newTask, dateStr])

    const dateToStr = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return date.toLocaleDateString(undefined, options)
    }

    return(
        <>
            <styled.HeaderSection>
                <styled.Label>
                    { dateToStr() }
                </styled.Label>
                <CommonBtn
                    buttonId={'calendar-btn'}
                    tooltipText={ 'Calendar' }
                    tooltipPlace={ 'bottom' }
                    onClick={ handleCalendarToggle }
                    active={ toggleCalendar }
                >
                    <styled.StyledIcon icon={ faCalendar } size={ 'xl' }/>
                </CommonBtn>
                <CommonBtn
                    buttonId={'new-task-btn'}
                    tooltipText={ 'New task' }
                    tooltipPlace={ 'bottom' } 
                    onClick={ handleNewTask }
                >
                    <styled.StyledIcon icon={ faPlus } size={ 'xl' }/>
                </CommonBtn>
            </styled.HeaderSection>
            { toggleCalendar &&
                <CalendarWindow
                    date={ date }
                    selectDate={ selectDate }
                />
            }
        </>
        
    )
}    