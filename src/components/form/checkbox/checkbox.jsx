import React from 'react'
import * as styled from './checkbox.styled'

import { useEnterSpacePress } from '../../../hooks/useEnterSpacePress'

 

export const Checkbox = ({ checked, onChange }) => {

    const handleCheckKey = useEnterSpacePress(onChange)
    return (
        <styled.CheckboxLabel
        >
            <styled.CheckboxContainer 
                checked={ checked }
                onChange={ onChange }
                onKeyDown={ handleCheckKey }
                tabIndex={ 0 }
            />
            <styled.CustomCheckbox />
        </styled.CheckboxLabel>

    )
}