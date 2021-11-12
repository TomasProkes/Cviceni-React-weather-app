const unixTimeToDate = (unixTime) => {
    const epochTime = unixTime * 1000
    return new Date(epochTime)
}

export const getHrsMins = (unixTime) => {
    const date = unixTimeToDate(unixTime)
    const [hrs, mins] = [date.getHours(), date.getMinutes()]
    return String(hrs) + ':' + String(mins).padStart(2, '0')
}

export const getDayOfWeek = (unixTime) => {
    const date = unixTimeToDate(unixTime)
    return date.toDateString().slice(0, 3)
}

export const getMonthAndDate = (unixTime) => {
    const date = unixTimeToDate(unixTime)
    return `${date.getDate()} ${date.toDateString().slice(4, 7)}`
}