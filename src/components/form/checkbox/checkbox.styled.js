import styled from 'styled-components'
import { theme } from '../../../utils/theme'

export const CheckboxLabel = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const CheckboxContainer = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    opacity: 0;
`
export const CustomCheckbox = styled.span`
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid ${theme.primary};
    border-radius: 25px;

    ${CheckboxContainer}:checked + &::before {
        content: "";
        position: absolute;
        top: 2px;
        left: 6px;
        width: 5px;
        height: 10px;
        border: solid ${theme.primary};
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
    &::after {
            content: "";
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border: 2px dashed ${theme.primary};
            border-radius: 29px;
            border-width: -4px;
    }
    ${CheckboxContainer}:focus-visible + &::after {
                content: "";
                position: absolute;
                top: -6px;
                left: -6px;
                right: -6px;
                bottom: -6px;
                border: 2px dashed ${theme.primary};
                border-radius: 25px;
            }

    @media (hover: hover) and (pointer: fine) {
        &:hover {
            &::after {
                content: "";
                position: absolute;
                top: -6px;
                left: -6px;
                right: -6px;
                bottom: -6px;
                border: 2px dashed ${theme.primary};
                border-radius: 25px;
            }
        }
    }
`