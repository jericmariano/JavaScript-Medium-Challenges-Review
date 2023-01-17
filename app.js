function convertToZeros(arr) {


    // for loop method 1
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = 0
    // }
    // return arr

    // ------------------- //

    // array . fill method 2
    // return arr.fill(0)

    // ------------------- //

    // array . map method 3
    return arr.map(elem => 0)

}

console.log(convertToZeros([5, 100, 0]))