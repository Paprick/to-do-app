import PropTypes from 'prop-types'

import { SideButton } from "../side-button/side-button"
import { useKeyPressAction } from "../../hooks/useKeyPressAction"

export const DateStepper = ({
    selectDate, 
    decrement = false, 
    date,
}) => {
    const handleOnClick = () => {
        selectDate(decrement)
    }
    const handleDateNavKey = useKeyPressAction(() => { handleOnClick(); })

    return(
        <SideButton
            onClick= { handleOnClick }
            date= { date }
            decrement={ decrement }
            onKeyDown= { handleDateNavKey }
        />
    )
}
DateStepper.propTypes = {
    selectDate: PropTypes.func.isRequired,
    decrement: PropTypes.bool,
    date: PropTypes.instanceOf(Date).isRequired
}