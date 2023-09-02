export const dateToStr = (date, timezone = 'en-GB', options = {}) => {
    return date.toLocaleDateString(timezone, options)
}