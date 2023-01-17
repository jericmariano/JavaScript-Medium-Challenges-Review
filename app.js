function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))