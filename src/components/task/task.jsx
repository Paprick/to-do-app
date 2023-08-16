import React, { useState, useEffect } from 'react'
import * as styled from './task.styled'
import { TextArea } from '../form/text-area/text-area'
import { Checkbox } from '../form/checkbox/checkbox'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import { useEnterSpacePress } from '../../hooks/useEnterSpacePress'
import { Tooltip } from 'react-tooltip'

export const Task = ({ 
        taskNr, 
        isChecked, 
        toggleTaskCheck, 
        delTask, 
        detailsChange, 
        taskDetails, 
        id,
        textSelectStart,
        textSelectEnd,
    }) => {

        
    const {
        attributes,
        listeners,
        setNodeRef, 
        transform,
        transition,
        setActivatorNodeRef,
        isDragging,
    } = useSortable({id: id, disabled: isChecked})

    const style= {
        transform: CSS.Translate.toString(transform),
        transition
    }
    const [expanded, setExpanded] = useState(false)
    const [scrollHeight, setScrollHeight] = useState('52px')

    const handleFocus = (e) => {
        setExpanded(true)
        const { scrollHeight } = e.target

        if (scrollHeight > 300) {
            setScrollHeight(`300px`)
        } else {
            setScrollHeight(`${ scrollHeight }px`)
        }
    }
    const handleBlur = () => {
        setExpanded(false)
        setScrollHeight('auto')
    }
    

    const handleDeleteKey = useEnterSpacePress(delTask)
    
    return(
        <styled.TaskWrapper
            style={ style }
            className={ isChecked && 'disabled' }
            ref={ setNodeRef }
            $expanded={ expanded }
            scrollheight={ scrollHeight }
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
                { taskNr + 1 }
            </styled.TaskNumber>
            <TextArea
                taskDetails={ taskDetails }
                detailsChange={ detailsChange }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
                expanded={ expanded }
                scrollheight={ scrollHeight }
                textSelectStart= { textSelectStart }
                textSelectEnd={ textSelectEnd }
            >

            </TextArea>
            <Checkbox 
                checked={ isChecked }
                onChange={ toggleTaskCheck }
            />
            <styled.TaskDel
                id={ `task_${id}` }
                onClick={ delTask }
                tabIndex={ 0 }
                onKeyDown={ handleDeleteKey }
            >
                <FontAwesomeIcon icon={faCircleXmark} size={'xl'}/>
            </styled.TaskDel>
            <Tooltip 
                anchorSelect={ `#task_${ id }` }
                content={ `Delete task` }
                place={ 'top' }
                wrapper={styled.StyledTooltip}
                offset={10}
            />
        </styled.TaskWrapper>
    )
}