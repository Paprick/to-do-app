import styled from 'styled-components'
import { theme } from '../../../utils/theme';


export const TexareaContainer = styled.textarea`
    font-family: 'Arial' ,'Open Sans';
    resize: none;
    color: ${theme.black};
    box-sizing: border-box;
    width: 100%;
    height: 59px;
    text-align: center;
    font-size: 1rem;
    border: 0px;
    box-shadow: 0 0 2px ${theme.black};
    padding: 13px 13px;
    &:hover {
        padding: 11px 13px;
        border: 2px solid ${theme.secondary};
    }
    &:focus-visible {
        padding: 11px 13px;
        outline: none;
        border: 2px solid ${theme.secondary};
    }

    @media only screen and (max-width: 900px) {
        font-size: 0.95em;
    }
    @media only screen and (max-width: 600px) {
        font-size: 0.85em;
    }
    &.animate-textarea {
        transition: height 0.3s ease;
    }
`;