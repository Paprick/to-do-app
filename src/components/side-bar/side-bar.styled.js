import styled from 'styled-components'
import { theme } from '../../utils/theme';

export const SideBar = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    top: 50%;
    width: 45px;
    height: 90px;
    background-color: ${theme.neutral};
    color: ${theme.primary};
    border: 2px solid ${theme.primary};
    border-radius: ${props => props.$decrement ? '0 100% 100% 0 / 0 50% 50% 0' : '100% 0 0 100% / 50% 0 0 50%'};
    cursor: pointer;
    //transform: translate(0%, -50%);
    ${props => (props.$decrement ? 'left: 0' : 'right: 0')};
    font-size: 1rem;
    z-index: 75;
    
    @media (hover: hover) and (pointer: fine) {
        &:hover { 
            background-color: ${theme.secondary};
            color: ${theme.neutral};
            transition: background-color 0.2s;
            border: 0px;
        }
    }

    &:focus-visible {
        outline: none;
        background-color: ${theme.secondary};
        color: ${theme.neutral};
        transition: background-color 0.2s;
        border: 0px;
    }

    @media only screen and (max-width: 900px) {
        width: 35px;
        height: 70px;
        font-size: 1em;
    }
    @media only screen and (max-width: 600px) {
        display: none;
    }
`;
export const StyledTooltip = styled.div`
    background-color: ${theme.secondary}!important;
    color: ${theme.neutral}!important;
    z-index: 75;
`;