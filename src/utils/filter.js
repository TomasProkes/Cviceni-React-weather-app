export const reduceForecasts = (arr) => {
    console.log('Puvodni pole predpovedi:')
    console.log(arr)
    const reductionRatio = 8
    const reducedArr = []
    for (let i = 0; i < arr.length; i += reductionRatio) {
        reducedArr.push(arr[i])
    }
    console.log('Vysledne redukovane pole:')
    console.log(reducedArr)
    return reducedArr
}