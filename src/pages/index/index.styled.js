import styled from 'styled-components'
import { theme } from '../../utils/theme'

export const MainDiv = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${theme.neutral};
    min-height: 100vh;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`;