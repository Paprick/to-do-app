import styled, { keyframes } from 'styled-components'
import Calendar from 'react-calendar'
import { theme } from '../../utils/theme'

const appearDown = keyframes`
    from {
        transform: translateY(-110%)
    }
    to {
        transform: translateY(0%)
    }
`

export const CalendarWrapper = styled.div`
    position: sticky;
    top: 90px;
    z-index: 75;
    animation: ${appearDown} 0.12s linear forwards;

    @media only screen and (max-width: 900px) {
        top: 70px;

    }
    @media only screen and (max-width: 600px) {
        top: 60px;
        max-width: 100%;
    }
    @media only screen and (max-width: 450px) {
        width: 100%;
    }
`
export const StyledCalendar = styled(Calendar)`
    box-shadow: 0 0 3px ${theme.black};
    background-color: ${theme.neutral};
    padding: 5px;
    width: 350px;
    box-sizing: border-box;

    @media only screen and (max-width: 450px) {
        width: 100%;
    }

    // ------------Navigation-------------

    .react-calendar__navigation {
        display: flex;
        height: 35px;
        margin-bottom: 20px;
    }
    .react-calendar__navigation__label {
        &:focus-visible {
            outline: none;
            opacity: 0.9;
            background-color: ${theme.secondary};
            color: ${theme.neutral};
        }
    }
    .react-calendar__navigation__arrow {
        flex-grow: 0.333;

        &:focus-visible {
            outline: none;
            opacity: 0.9;
            background-color: ${theme.secondary};
            color: ${theme.neutral};
        }
    }

    // ------------ View -----------------

    .react-calendar__century-view__decades {
        display: grid !important;
        grid-template-columns: 50% 50%;
    }
    .react-calendar__decade-view__years {
        display: grid !important;
        grid-template-columns: 50% 50%;
    }
    .react-calendar__year-view__months {
        display: grid !important;
        grid-template-columns: 33.3% 33.3% 33.3%;
    } 
    .react-calendar__month-view__days__day--neighboringMonth {
        opacity: 0.5;
    }
    .react-calendar__month-view__days__day--weekend {           
        color: ${theme.red};
    }
    .react-calendar__month-view__weekdays {
        text-align: center;
        font-weight: 600;
        padding-bottom: 10px;
    }
    .react-calendar__month-view__days {
        display: grid !important;
        grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% !important; 
        text-align: center;
    }
    
    // --------------- Tiles -------------

    button {
        background-color: ${theme.neutral};
        color: ${theme.black};
        border: 0;
        padding: 3px 3px;
        cursor: pointer;

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                background-color: ${theme.secondary};
                color: ${theme.neutral};
            }
        }
    }
    .react-calendar__tile {
        padding: 10px 10px;
        box-sizing: content-box;

        &:focus-visible {
            outline: none;
            opacity: 0.9;
            background-color: ${theme.secondary};
            color: ${theme.neutral};
        }
    }
    
    .react-calendar__tile--active {
        background-color: ${theme.secondary} !important;
        color: ${theme.neutral} !important;
    }
    .react-calendar__tile--now {
        background-color: ${theme.primary};
        color: ${theme.neutral};
    }
    
`