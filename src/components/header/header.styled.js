import styled from 'styled-components'
import { theme } from '../../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderSection = styled.section`
    position: sticky;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    background-color: ${theme.primary};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 10px;
    z-index: 100;
    font-size: 1.2rem;
    height: 90px;

    @media only screen and (max-width: 900px) {
        height: 70px;
    }
    @media only screen and (max-width: 600px) {
        height: 60px;
    }
`;
export const Label = styled.div`
    font-size: 1.2em;
    color: ${theme.neutral};
    font-weight: 600;

    @media only screen and (max-width: 900px) {
        font-size: 1em;
    }
    @media only screen and (max-width: 600px) {
        font-size: 0.8em;
    }
`;
export const StyledIcon = styled(FontAwesomeIcon)`

    @media only screen and (max-width: 900px) {
        font-size: 1em;
    }
    @media only screen and (max-width: 600px) {
        font-size: 0.8em;
    }
`