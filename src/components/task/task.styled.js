import styled from 'styled-components'
import { theme } from '../../utils/theme'


export const TaskWrapper = styled.div`
    background-color: ${theme.neutral};
    box-shadow: ${props => props.$isDragging ? `0 0 10px ${theme.black}` : `0 0 3px ${theme.black}`};
    border-radius: 25px;
    width: 100%;
    display: grid;
    grid-template-columns: 10% 6% 70% 7% 7%;
    justify-items: center;
    align-items: center;
    padding: ${props => props.$isDragging ? '7px 18px' : '7px 0px'};
    height: auto;
    transition: height 0.2s;
    z-index: ${props => props.$isDragging ? '51' : '50'};
    
    &.disabled {
        opacity: 0.4;
        text-decoration: line-through;
        box-shadow: 0 0 2px ${theme.black};
    }


    @media only screen and (max-width: 900px) {
        grid-template-columns: 10% 10% 60% 10% 10%;
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: 10% 10% 56% 12% 12%;
    }
`
export const Grabber = styled.div`
    color: ${theme.black};
    touch-action: none;
    cursor: grab;
    user-select: none;
    &:focus-visible {
        outline: none;
        color: ${theme.secondary};
    }
`
export const TaskNumber = styled.div`
    color: ${theme.black};
    font-size: 21px;
    font-weight: 600;
`