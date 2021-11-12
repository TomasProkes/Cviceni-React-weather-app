export const reduceForecasts = (arr) => {
    const reductionRatio = 8
    const reducedArr = []
    
    for (let i = 0; i < arr.length; i += reductionRatio) {
        reducedArr.push(arr[i])
    }

    return reducedArr
}