export const unixTimeToDate = (unixTime) => {
    const epochTime = unixTime * 1000
    console.log(`Converting epoch time ${epochTime} to date...`)
    const date = new Date(epochTime)
    console.log(`Epoch time ${epochTime} corresponds to ${date}.`)
    return date
}

export const getHrsMins = (date) => {
    console.log(`Parsing hours and minutes from date ${date}.`)
    const [hrs, mins] = [date.getHours(), date.getMinutes()]
    console.log(`Date ${date} corresponds to ${hrs} hours and ${mins} minutes.`)   
    return String(hrs).padStart(2, '0') + ':' + String(mins).padStart(2, '0')
}
