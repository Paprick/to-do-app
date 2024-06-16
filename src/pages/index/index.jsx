import React, { useState, useEffect } from "react"

import * as styled from './index.styled'
import { getTasks } from "../../utils/getTasks"
import { dateToStr } from "../../utils/dateToStr"

import { Header } from "../../components/header/header"
import { DateStepper } from "../../components/date-stepper/date-stepper";

import { SwipeContainer } from "../../components/swipe-container/swipe-container";


export const Index = () => {
    //Dates
    const [date, setDate] = useState(new Date())
    //Tasks
    const [tasks, setTasks] = useState(getTasks)
    //Swipe Animations
    const [isSwipedRight, setIsSwipedRight] = useState(false)
    const [isSwipedLeft, setIsSwipedLeft] = useState(false)
    
    //Update local storage on change
    useEffect(()=> { 
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    //stringyfy date
    const dateStr = dateToStr(date)

    //Set date stepper
    const dateNav = (decrement) => {
        setDate((prevDate) => {
            const dateCopy = new Date(prevDate)
            const shouldDecrement = decrement ? -1 : +1
            dateCopy.setDate(prevDate.getDate() + shouldDecrement)
            animate(dateCopy, prevDate)
            
            return dateCopy
        })
    } 

    const animate = (newDate, prevDate) => {
        const swipeDirection = newDate < prevDate ? setIsSwipedRight(true) : setIsSwipedLeft(true)
        return swipeDirection
    } 
    const handleAnimationEnd = () => {
        setIsSwipedRight(false)
        setIsSwipedLeft(false)
    }

    //Animate calendar set date
    const setDateWithAnim = (newDate) => {
        setDate((prevDate) => {
            animate(newDate, prevDate)
            return newDate
        })
    }

    return (
        <styled.MainDiv>
            <Header
                tasks={ tasks }
                setTasks={ setTasks }
                date={ date }
                selectDate={ setDateWithAnim }  
                dateStr={ dateStr }
            />
                <DateStepper
                    selectDate={ dateNav }
                    date= { date }
                    decrement={ true }
                />

                <SwipeContainer 
                    tasks={ tasks }
                    setTasks={ setTasks }
                    dateStr={ dateStr }
                    isSwipedRight={ isSwipedRight }
                    isSwipedLeft={ isSwipedLeft }
                    handleAnimationEnd={ handleAnimationEnd }
                    selectDate={ dateNav }
                />
                <DateStepper
                    selectDate={ dateNav }
                    date= { date }
                />
        </styled.MainDiv>
    )
}