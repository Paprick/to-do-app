import { useCallback } from 'react'

export const useDateNav = (selectDate, decrement) => {
    const handleDate = useCallback(() => {
        selectDate((prevDate) => {
            const dateCopy = new Date(prevDate)
            if(decrement) {
                dateCopy.setDate(prevDate.getDate() - 1)
            } else {
                dateCopy.setDate(prevDate.getDate() + 1)
            }
            return dateCopy
        })
    }, [selectDate, decrement])

    return handleDate
}