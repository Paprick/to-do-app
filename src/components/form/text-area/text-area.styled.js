import styled from 'styled-components'
import { theme } from '../../../utils/theme';

export const TexareaContainer = styled.textarea`
    resize: none;
    color: ${theme.black};
    box-sizing: border-box;
    width: 100%;
    height: ${props => props.$expanded ? props.scrollheight : '50px'};
    transition: height 0.2s ease;
    text-align: center;
    font-size: 1.1rem;
    border: 0px;
    box-shadow: 0 0 2px ${theme.black};
    padding: 13px 13px;
    &:hover {
        border: 2px solid ${theme.secondary};
    }
    &:focus-visible {
        outline: none;
        border: 2px solid ${theme.secondary};
    }

    @media only screen and (max-width: 900px) {
        font-size: 0.95em;
    }
    @media only screen and (max-width: 600px) {
        font-size: 0.85em;
    }
`;