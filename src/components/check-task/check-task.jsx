import PropTypes from 'prop-types';
import { Checkbox } from "../form/checkbox/checkbox"

export const CheckTask = ({ 
    isChecked,
    setTasks, 
    dateStr,
    index
}) => {
    const swapDisabledItem = () => {
        setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks };
            const tasksForDate = [ ...updatedTasks[dateStr] ];
    
            const removedItem = tasksForDate.splice(index, 1)[0];
            const checkedItems = tasksForDate.filter(item => item.checked);
    
            if (updatedTasks[dateStr][index].checked && checkedItems.length === 0) {
                tasksForDate.push(removedItem);
            } else if (updatedTasks[dateStr][index].checked) {
                tasksForDate.splice(tasksForDate.length, 0, removedItem);
            } else {
                const insertIndex = checkedItems.length > 0 ? checkedItems[checkedItems.length - 1] : 0;
                tasksForDate.splice(insertIndex, 0, removedItem);
            }
    
            updatedTasks[dateStr] = tasksForDate;
            return updatedTasks;
        });
    }

    const toggleTaskCheck = () => {
        setTasks((prevState) => {
            const updatedTasks = { ...prevState }
            const tasksForDate = [ ...updatedTasks[dateStr] ]
            tasksForDate[index] = { 
                ...tasksForDate[index], 
                checked: !tasksForDate[index].checked
            }

            updatedTasks[dateStr] = tasksForDate

            return updatedTasks
        })
        swapDisabledItem(index)
    }
    return (
        <Checkbox 
            checked={ isChecked }
            onChange={ toggleTaskCheck }
            id= { `${dateStr}_Task_${index}_Check` }
        />
    )
}
CheckTask.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    setTasks: PropTypes.func.isRequired,
    dateStr: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
}