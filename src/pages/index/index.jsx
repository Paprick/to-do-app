import React, { useState, useEffect, useMemo } from "react"
import { useSwipeable } from 'react-swipeable'// https://www.npmjs.com/package/react-swipeable
import { useDateNav } from "../../hooks/useDateNav";
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

import * as styled from './index.styled'
import { getTasks } from "../../utils/getTasks"

import { Header } from "../../components/header/header"
import { SideBar } from "../../components/side-bar/side-bar"
import { Task } from "../../components/task/task"
import { NoTasksContainer } from "../../components/no-tasks-container/no-tasks-container";

import { useEnterSpacePress } from "../../hooks/useEnterSpacePress";

import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export const Index = () => {

    const [tasks, setTasks] = useState(getTasks) //Collections of all tasks with date
    
    //update local storage on change
    useEffect(()=> { 
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    //Get Dates
    const [date, setDate] = useState(new Date())
    const getDateStr = () => {
        return date.toLocaleDateString('en-GB')
    }
    const dateStr = getDateStr()

    // handle tasks

    const swapDisabledItem = (index) => {
        
        const firstCheckedItem = tasks[dateStr].findIndex((item) => item.checked)
        setTasks((tasks) => {
            const prevTasks = { ...tasks }
            const tasksForDate = [ ...prevTasks[dateStr] ]
            const removedItem = tasksForDate.splice(index, 1)

            if (tasks[dateStr][index].checked && firstCheckedItem === -1) {
                tasksForDate.push(removedItem[0])
            } else if (tasks[dateStr][index].checked) {
                tasksForDate.splice(firstCheckedItem -1, 0, removedItem[0])
            } else {
                tasksForDate.splice(firstCheckedItem, 0, removedItem[0])
            }

            prevTasks[dateStr] = tasksForDate  
            return prevTasks
        })
    }

    const toggleTaskCheck = (index) => {
        setTasks((prevState) => {
            const prevTasks = { ...prevState }
            const tasksForDate = [ ...prevTasks[dateStr] ]
            tasksForDate[index] = { 
                ...tasksForDate[index], 
                checked: !tasksForDate[index].checked
            }

            prevTasks[dateStr] = tasksForDate

            return prevTasks
        })
        swapDisabledItem(index)
    }
    const updateIds = () => { //Update ids after swap to prevent multiple of the same ids
        setTasks((prevState) => {
            const prevTasks = { ...prevState }
            const tasksForDate = [ ...prevTasks[dateStr] ]
            
            tasksForDate.forEach((task, index) => task.id = index + 1)
            prevTasks[dateStr] = tasksForDate

            return prevTasks
        })
    }
    const handleTaskDel = (index) => {
        setTasks((prevState) => {
            const prevTasks = { ...prevState }
            const tasksForDate = [ ...prevTasks[dateStr] ]

            tasksForDate.splice(index, 1)
            prevTasks[dateStr] = tasksForDate

            return prevTasks 
        })
        updateIds()
    }
    const handleTaskDetChange = (index, value) => {
        setTasks((prevState) => {
            const prevTasks = { ...prevState }
            const tasksForDate = [ ...prevTasks[dateStr] ]

            tasksForDate[index] = {
                ...tasksForDate[index],
                details: value
            }            

            prevTasks[dateStr] = tasksForDate

            return prevTasks
        })
    }

    //Dnd
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            cordinateGetter: sortableKeyboardCoordinates,
        })
    )

    //Map only ids for dnd 
    const tasksIds = useMemo(()=> tasks[dateStr] ? tasks[dateStr].map((task) => task.id) : [], [tasks, dateStr]) // Get ids from all tasks for dnd list
    
    const handleDragEnd = e => {
        const {active, over} = e
        if(active.id !== over.id) {
            setTasks((tasks) => {
                const prevTasks = { ...tasks }
                const tasksForDate = [ ...prevTasks[dateStr] ]
                const oldIndex = tasksForDate.findIndex((task) => task.id === active.id)
                const newIndex = tasksForDate.findIndex((task) => task.id === over.id)
                prevTasks[dateStr] = arrayMove(tasksForDate, oldIndex, newIndex)
                return prevTasks
            })  
        }    
    }
    

    //Handle Date Change on Side Nav
    const handleDateIncrement = useDateNav(setDate, false)
    const handleDateDecrement = useDateNav(setDate, true)

    const handleDateIncrementKey = useEnterSpacePress(() => { handleDateIncrement(); handleSwipeLeftAnim(); })
    const handleDateDecrementKey = useEnterSpacePress(() => { handleDateDecrement(); handleSwipeRightAnim(); })

    

    //Swipe handlers
    const SwipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            if (!isSelecting) {
                handleSwipeLeftAnim()
                handleDateIncrement()
            }
        },
        onSwipedRight: () => {
            if (!isSelecting) {
                handleSwipeRightAnim()
                handleDateDecrement()
            }
        },
        trackMouse: true,
        delta: 150,
        swipeDuration: 300,
        preventScrollOnSwipe: true,
    })

    //Swipe Animations
    const [isSwipedRight, setIsSwipedRight] = useState(false)
    const [isSwipedLeft, setIsSwipedLeft] = useState(false)

    const handleSwipeLeftAnim = () => {
        setIsSwipedLeft(true)
    }
    const handleSwipeRightAnim = () => {
        setIsSwipedRight(true)
    }

    const handleAnimationEnd = () => {
        setIsSwipedRight(false)
        setIsSwipedLeft(false)
    }

    //Animate calendar set date
    const setDateWithAnim = (newDate) => {
        setDate((prevDate) => {
            if (newDate < prevDate) {
                handleSwipeRightAnim()
            } else {
                handleSwipeLeftAnim()
            }
            return newDate
        })
    }

    //Change when text selecting to prevent swipe
    const [isSelecting, setIsSelecting] = useState(false)

    const handleTextSelectStart = () => {
        setIsSelecting(true)
    }
    const handleTextSelectEnd = () => {
        setIsSelecting(false)
    }

    return (
        <styled.MainDiv
        { ...SwipeHandlers }
        >
            <Header
                tasks={ tasks }
                newTask={ setTasks }
                date={ date }
                selectDate={ setDateWithAnim }  
                dateStr={ dateStr }
            />
                <SideBar
                    buttonId={ 'previous-date-btn' }
                    tooltipText={ 'Previous date' }
                    tooltipPlace={ 'left' } 
                    selectDate={ setDate }
                    decrement={ true }
                    onKeyDown= { handleDateDecrementKey }
                    handleSwipeLeftAnim = { handleSwipeLeftAnim }
                    handleSwipeRightAnim= { handleSwipeRightAnim }
                >
                   <styled.StyledIcon icon={faChevronLeft} size={'xl'}/>
                </SideBar>
                <styled.TasksWrapper>
                    <styled.Tasks
                        className={ `${isSwipedRight ? 'swipe-right' : ''}${isSwipedLeft ? 'swipe-left' : ''}` }
                        onAnimationEnd={ handleAnimationEnd }
                    >
                        
                        <DndContext
                            sensors={ sensors }
                            collisionDetection={ closestCenter }
                            onDragEnd={ handleDragEnd }
                            modifiers={ [restrictToFirstScrollableAncestor, restrictToVerticalAxis] }
                        >
                            <SortableContext
                                items={ tasksIds }
                                strategy={ verticalListSortingStrategy }
                            >
                                { tasks[dateStr] && tasks[dateStr].length > 0 ? tasks[dateStr].map(( { details, checked, id }, index ) => (
                                    <Task
                                        id={ id }
                                        key={ `${dateStr}_task_${id}` }
                                        taskNr={ index } 
                                        isChecked={ checked }
                                        toggleTaskCheck={ () => { toggleTaskCheck(index) } }
                                        delTask={ ()=> { handleTaskDel(index) } }
                                        detailsChange={ (e)=> { handleTaskDetChange(index, e.target.value) } }
                                        taskDetails={ details }
                                        textSelectStart={ handleTextSelectStart }
                                        textSelectEnd={ handleTextSelectEnd }
                                    >
                                    </Task>
                                )) :
                                    <NoTasksContainer/>

                                }
                            </SortableContext>
                        </DndContext>
                    </styled.Tasks>
                </styled.TasksWrapper>
                <SideBar
                    buttonId={ 'next-date-btn' }
                    tooltipText={ 'Next date' }
                    tooltipPlace={ 'left' } 
                    selectDate={ setDate }
                    onKeyDown= { handleDateIncrementKey }
                    handleSwipeLeftAnim = { handleSwipeLeftAnim }
                    handleSwipeRightAnim= { handleSwipeRightAnim }
                >
                    <styled.StyledIcon icon={faChevronRight} size={'xl'}/>
                </SideBar>
        </styled.MainDiv>
    )
}
/*  
    # FIX KEYS OR NAMES
    # add labels and aria labels
    # useCallbacks?
    # prop types and comments
    # fix task detail size change on hover + text?
    # import calendar on call?
    # change metadata
    # change title and logo
    # rethink focus- visible on tab? and swipe distance
    # rethink scroll when deleting text in task
    # change typography
*/