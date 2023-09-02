import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledIcon = styled(FontAwesomeIcon)`

    @media only screen and (max-width: 900px) {
        font-size: 1em;
    }
    @media only screen and (max-width: 600px) {
        font-size: 0.8em;
    }
`