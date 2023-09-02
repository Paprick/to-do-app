import { useState } from 'react';
import PropTypes from "prop-types"
import * as styled from './swipe-container.styled'
import { useSwipeable } from 'react-swipeable'// https://www.npmjs.com/package/react-swipeable

import { SortableTasks } from '../sortable-tasks/sortable-tasks';

export const SwipeContainer = ({
    tasks,
    setTasks,
    dateStr,
    isSwipedRight,
    isSwipedLeft,
    handleAnimationEnd,
    selectDate
}) => {
    //Change when text selecting to prevent swipe
    const [isTextboxFocused, setIsTextboxFocused] = useState(false)

    const SwipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            if (!isTextboxFocused) {
                selectDate(false)
            }
        },
        onSwipedRight: () => {
            if (!isTextboxFocused) {
                selectDate(true)
            }
        },
        trackMouse: true,
        delta: 150,
        swipeDuration: 300,
        preventScrollOnSwipe: true,
    })

    return (
        <styled.TasksWrapper
            {...SwipeHandlers}
        >
            <styled.Tasks
                className={ `${isSwipedRight ? 'swipe-right' : ''}${isSwipedLeft ? 'swipe-left' : ''}` }
                onAnimationEnd={ handleAnimationEnd }
            >        
                <SortableTasks 
                    tasks= { tasks }
                    dateStr={ dateStr }
                    setTasks={ setTasks }
                    setIsTextboxFocused= { setIsTextboxFocused }
                />
            </styled.Tasks>
        </styled.TasksWrapper>
    )
}
SwipeContainer.propTypes = {
  dateStr: PropTypes.string.isRequired,
  handleAnimationEnd: PropTypes.func.isRequired,
  isSwipedLeft: PropTypes.bool.isRequired,
  isSwipedRight: PropTypes.bool.isRequired,
  selectDate: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
  tasks: PropTypes.object.isRequired
}
