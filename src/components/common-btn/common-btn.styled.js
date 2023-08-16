import styled from 'styled-components'
import { theme } from '../../utils/theme';

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.neutral};
    background-color: ${theme.secondary};
    border: 0px;
    border-radius: 50%;
    padding: 5px 20px;
    cursor: pointer;
    width: 70px;
    height: 70px;
    font-size: 1.2rem;
    font-weight: 800;

    &.active {
        background-color: ${theme.neutral};
        color: ${theme.primary};
        transition: background-color 0.2s;
    }

    
    //prevent hover on touch screens
    @media (hover: hover) and (pointer: fine) {
        &:hover { 
            background-color: ${theme.neutral};
            color: ${theme.primary};
            transition: background-color 0.2s;
        }
    }

    &:focus-visible {
        outline: none;
        background-color: ${theme.neutral};
        color: ${theme.primary};
        transition: background-color 0.2s;
    }

    @media only screen and (max-width: 900px) {
        width: 50px;
        height: 50px;
    }
    @media only screen and (max-width: 600px) {
        width: 40px;
        height: 40px;
    }
`;
export const StyledTooltip = styled.div`
    background-color: ${theme.secondary}!important;
    color: ${theme.neutral}!important;
`;