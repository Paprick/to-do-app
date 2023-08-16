import styled from 'styled-components'
import { theme } from '../../utils/theme';

export const NoTasksComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.black};
    font-size: 1.5rem;
    opacity: 0.8;
    text-align: center;

    span {
        color: ${theme.primary};
        opacity: 1;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1.2em;
    }
`;

export const TutorialLabel = styled.div`
    font-size: 0.8em;

    @media only screen and (max-width: 600px) {
        font-size: 0.6em;
    }
`;  