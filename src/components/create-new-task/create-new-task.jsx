import PropTypes from 'prop-types';
import * as styled from './create-new-task.styled'

import { CommonBtn } from "../common-btn/common-btn"
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export const CreateNewTask = ({
    setTasks,
    dateStr
}) => {

    const handleNewTask = () => {
        setTasks((prevState) => {
            const updatedTasks = { ...prevState }

            if(updatedTasks[dateStr]) {
                const firstCheckedItemIndex = updatedTasks[dateStr].findIndex((item) => item.checked)
                
                if (firstCheckedItemIndex !== -1) {
                    updatedTasks[dateStr].splice(firstCheckedItemIndex, 0, { id: updatedTasks[dateStr].length + 1, details: '', checked: false })
                } else {
                    updatedTasks[dateStr].push({ id: updatedTasks[dateStr].length + 1, details: '', checked: false });
                }       
            } else {
                updatedTasks[dateStr] = [{ id: 1, details: '', checked: false }]
            }
            return { ...updatedTasks }
        })    
    }

    return (
        <CommonBtn
            id={'create-task-btn'}
            tooltipText={ 'New task' }
            tooltipPlace={ 'bottom' } 
            ariaLabel={ 'Create new task' }
            onClick={ handleNewTask }
        >
            <styled.StyledIcon icon={ faPlus } size={ 'xl' }/>
        </CommonBtn>
    )
}
CreateNewTask.propTypes = {
    setTasks: PropTypes.func.isRequired,
    dateStr: PropTypes.string.isRequired
  };
