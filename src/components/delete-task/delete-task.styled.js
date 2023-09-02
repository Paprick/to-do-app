import styled from 'styled-components'
import { theme } from '../../utils/theme';

export const TaskDel = styled.div`
    color: ${theme.red};
    cursor: pointer;
    user-select: none;
    
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            border-radius: 25px;
            padding: 2px;
            border: 2px dashed ${theme.red};
        }
    }
    &:focus-visible {
        outline: none;
        border-radius: 25px;
        padding: 2px;
        border: 2px dashed ${theme.red};
    }
`
export const StyledTooltip = styled.div`
    background-color: ${theme.red}!important;
    color: ${theme.neutral}!important;
    z-index: 75;
`;