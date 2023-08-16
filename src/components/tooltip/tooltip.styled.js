import styled from 'styled-components'
import { theme } from '../../utils/theme';

export const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;
`
export const TooltipContent = styled.div`
    position: absolute; //needs to be fixed for fixed stuff
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.secondary};
    color: ${theme.neutral};
    padding: 8px;
    border-radius: 12px;
    white-space: nowrap;
    opacity: 0;
    //opacity: ${({ $visible }) => ($visible ? '1' : '0')};
    //display: ${({ $visible }) => ($visible ? 'inline-block' : 'none')};
    display: inline-block;
    opacity: 1;
    transition: opacity 0.3s, visibility 0.3s;
`;