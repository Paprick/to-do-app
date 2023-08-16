import React, { forwardRef } from 'react'
import * as styled from './task-wrapper.styled'

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities'



export const TaskWrapper = forwardRef(({ id, children }, ref) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: id})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <styled.TaskWrapper ref={ ref } style={ style } {...attributes} {...listeners}>
            { id }
        </styled.TaskWrapper>
    )
})