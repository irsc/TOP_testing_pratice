function analyzeArray(array){
    let obj = {
        average : array.reduce((prev, curr) => prev + curr) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length :  array.length
    }
    return obj; 
}


module.exports = analyzeArray;