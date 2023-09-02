import PropTypes from "prop-types"
import { TextArea } from "../form/text-area/text-area"

export const TaskDetailChange = ({ 
    taskDetails,
    setTasks,
    dateStr,
    setIsTextboxFocused,
    index
}) => {

    const handleTaskDetChange = (e) => {
        setTasks((prevState) => {
            const prevTasks = { ...prevState }
            const tasksForDate = [ ...prevTasks[dateStr] ]

            tasksForDate[index] = {
                ...tasksForDate[index],
                details: e.target.value
            }            

            prevTasks[dateStr] = tasksForDate

            return prevTasks
        })
    }

    return (
        <TextArea
            taskDetails={ taskDetails }
            detailsChange={ handleTaskDetChange }
            setIsTextboxFocused= { setIsTextboxFocused }
            id= { `${dateStr}_Task_${index}_Det` }
        />
    )
}
TaskDetailChange.propTypes = {
  dateStr: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setIsTextboxFocused: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
  taskDetails: PropTypes.any
}
