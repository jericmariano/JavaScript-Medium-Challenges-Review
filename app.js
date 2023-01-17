function filterOutFalsy(arr) {
    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))