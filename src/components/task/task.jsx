import PropTypes from "prop-types"
import * as styled from './task.styled'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'

import { DeleteTask } from '../delete-task/delete-task'
import { TaskDetailChange } from '../task-detail-change/task-detail-change'
import { CheckTask } from '../check-task/check-task'

export const Task = ({ 
        taskNr, 
        isChecked, 
        taskDetails, 
        id,
        setIsTextboxFocused,
        dateStr,
        setTasks,
        index,
    }) => {

        
    const {
        attributes,
        listeners,
        setNodeRef, 
        transform,
        transition,
        setActivatorNodeRef,
        isDragging,
    } = useSortable({id: id, disabled: isChecked, attributes: { roleDescription: 'sortable task' } })

    const style= {
        transform: CSS.Translate.toString(transform),
        transition
    }
    
    
    return(
        <styled.TaskWrapper
            style={ style }
            className={ isChecked && 'disabled' }
            ref={ setNodeRef }
            $isDragging={ isDragging }
        >
            <styled.Grabber
                ref={ setActivatorNodeRef }
                { ...attributes } 
                { ...listeners }
            >
                <FontAwesomeIcon icon={faGripLines} size={'xl'}/>
            </styled.Grabber>
            <styled.TaskNumber>
                { taskNr }
            </styled.TaskNumber>
            <TaskDetailChange
                taskDetails={ taskDetails }
                setTasks={ setTasks }
                dateStr={ dateStr }
                index={ index }
                setIsTextboxFocused= { setIsTextboxFocused }
            />
            <CheckTask 
                isChecked={ isChecked }
                setTasks={ setTasks }
                dateStr={ dateStr }
                index= { index }
            />
            <DeleteTask 
                id={ id }
                taskNr={ taskNr }
                dateStr={ dateStr }
                setTasks={ setTasks }
                index= { index }
            />
        </styled.TaskWrapper>
    )
}
Task.propTypes = {
  dateStr: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  setIsTextboxFocused: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
  taskDetails: PropTypes.any,
  taskNr: PropTypes.number.isRequired
}
