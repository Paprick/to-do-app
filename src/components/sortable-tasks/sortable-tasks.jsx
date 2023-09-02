import { useMemo } from 'react'
import PropTypes from "prop-types"
import { //https://docs.dndkit.com/presets/sortable
    DndContext, 
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
    restrictToVerticalAxis,
    restrictToFirstScrollableAncestor
} from '@dnd-kit/modifiers'

import { Task } from '../task/task';
import { NoTasksContainer } from '../no-tasks-container/no-tasks-container';

export const SortableTasks = ({
    tasks,
    dateStr,
    setTasks,
    setIsTextboxFocused,
}) => {
    const tasksIds = useMemo(()=> tasks[dateStr] ? tasks[dateStr].map((task) => task.id) : [], [tasks, dateStr]) // Get ids from all tasks for dnd list
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            cordinateGetter: sortableKeyboardCoordinates,
        })
    )
    
    const handleDragEnd = e => {
        const {active, over} = e
        if(over && active.id !== over.id) {
            setTasks((tasks) => {
                const updatedTasks = { ...tasks }
                const tasksForDate = [ ...updatedTasks[dateStr] ]
                const oldIndex = tasksForDate.findIndex((task) => task.id === active.id)
                const newIndex = tasksForDate.findIndex((task) => task.id === over.id)
                updatedTasks[dateStr] = arrayMove(tasksForDate, oldIndex, newIndex)
                return updatedTasks
            })  
        }    
    }

    const getTaskNr = (id) => tasksIds.indexOf(id) + 1
    const tasksCount = tasksIds.length
    const announcements = {
        onDragStart({ active }) {
            return `Picked up task number ${getTaskNr(active.id)} Current position ${getTaskNr(active.id)} of ${tasksCount}.`
        },
        onDragOver({ active, over }) {
            if (over) {
                return `Task number ${getTaskNr(active.id)} was moved into position ${getTaskNr(over.id)} of ${tasksCount}`
            }
        },
        onDragEnd({ active, over }) {
            if (over) {
                return `Task number ${getTaskNr(active.id)} was dropped at position ${getTaskNr(over.id)} of ${tasksCount}`
            }
        },
        onDragCancel({ active }) {
            return `Dragging was cancelled. Task number ${getTaskNr(active.id)} was dropped to it's original position.`
        }

    }
    const screenReaderInstructions = {
        draggable: `To pick up a task, press space or enter.
        Use the up and down arrow keys to update the position of the task in the list.
        Press space or enter again to drop the task in its new position, or press escape to cancel.`
    }

    return (
        <DndContext
            sensors={ sensors }
            collisionDetection={ closestCenter }
            onDragEnd={ handleDragEnd }
            modifiers={ [restrictToFirstScrollableAncestor, restrictToVerticalAxis] }
            accessibility={ {announcements,screenReaderInstructions} }
            
        >
            <SortableContext
                items={ tasksIds }
                strategy={ verticalListSortingStrategy }
            >
                { tasks[dateStr] && tasks[dateStr].length > 0 ? tasks[dateStr].map(( { details, checked, id }, index ) => (
                    <Task
                        id={ id }
                        key={ `${dateStr}_task_${id}` }
                        dateStr={ dateStr }
                        setTasks={ setTasks }
                        index= { index }
                        taskNr={ index + 1 } 
                        isChecked={ checked }
                        toggleTaskCheck={ (toggleTaskCheck) => { toggleTaskCheck(index) } }
                        taskDetails={ details }
                        setIsTextboxFocused ={ setIsTextboxFocused }
                    >
                </Task>
                )) :
                    <NoTasksContainer/>
                }
            </SortableContext>
        </DndContext>
    )
}
SortableTasks.propTypes = {
  dateStr: PropTypes.string.isRequired,
  setIsTextboxFocused: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
  tasks: PropTypes.object.isRequired
}
