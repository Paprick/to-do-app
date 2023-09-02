import * as styled from './delete-task.styled'
import PropTypes from 'prop-types';
import { useKeyPressAction } from '../../hooks/useKeyPressAction'
import { Tooltip } from 'react-tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'


export const DeleteTask = ({ 
    id,
    taskNr,
    index,
    dateStr,
    setTasks   
 }) => {

    const handleTaskDel = () => {
        setTasks((prevState) => {
            const updatedTasks = { ...prevState }
            const tasksForDate = [...updatedTasks[dateStr]];

            tasksForDate.splice(index, 1)
            tasksForDate.forEach((task, index) => task.id = index + 1) //UpdateIds
            updatedTasks[dateStr] = tasksForDate

            return updatedTasks 
        })
    }
    const handleDeleteKey = useKeyPressAction(handleTaskDel)
    
    return (
        <>
            <styled.TaskDel
                id={ `task_${id}` }
                onClick={ handleTaskDel }
                tabIndex={ 0 }
                onKeyDown={ handleDeleteKey }
                role={ 'button' }
                aria-label={ `Delete task ${ taskNr }` }
            >
                <FontAwesomeIcon icon={ faCircleXmark } size={ 'xl' }/>
            </styled.TaskDel>
            <Tooltip 
                anchorSelect={ `#task_${ id }` }
                content={ `Delete task` }
                place={ 'top' }
                wrapper={ styled.StyledTooltip }
                offset={ 10 }
            />
        </>
    )
}
DeleteTask.propTypes = {
    id: PropTypes.number.isRequired,
    taskNr: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    dateStr: PropTypes.string.isRequired,
    setTasks: PropTypes.func.isRequired
  };