// Reverse the array 
// in -> [1,2,3,4,5,6,7,8,9]  out -> [9,8,7,6,5,4,3,2,1]


function flipArray(a){
 var flippedArray = []
    for(var i = a.length; i > 0; i--){
        flippedArray.push(a[i-1]);
    }
    return flippedArray;
}


console.log(flipArray([1,2,3,4,5,6,7,8,9]))