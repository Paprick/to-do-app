import PropTypes from 'prop-types';
import * as styled from './checkbox.styled'

import { useKeyPressAction } from '../../../hooks/useKeyPressAction'

export const Checkbox = ({ checked, onChange, id }) => {
    const handleCheckKey = useKeyPressAction(onChange)
    return (
        <styled.CheckboxWrapper>
            <styled.CheckboxLabel 
                htmlFor={ id }
            >
                Mark task as completed
            </styled.CheckboxLabel>
            <styled.CheckboxContainer 
                checked={ checked }
                onChange={ onChange }
                onKeyDown={ handleCheckKey }
                tabIndex={ 0 }
                id={ id }
            />
            <styled.CustomCheckbox />
        </styled.CheckboxWrapper>
    )
}
Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}