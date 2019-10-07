
//Trapped rain water

function findWater(array, n){
    var result = 0;
    var left_max = 0, right_max = 0; 

    var lo = 0, hi = n-1;

    while(lo <= hi){
        if(array[lo] < array[hi]){
            if(array[lo] > left_max){
                left_max = array[lo];
            } else {
                result += left_max - array[lo];
                console.log(`result1: ${result} , ${left_max}, ${array[lo]}`)
                lo++;
            }
        } else {
            if(arr[hi] > right_max){
                right_max = arr[hi]
            } else {
                result += right_max - array[hi];
                console.log(`result2: ${result} , left : ${left_max}, right:${right_max}, arrayLo: ${array[lo]}, arrayHi: ${array[hi]} `)
                hi--;
            }
        }
    }
    return result;

}

var arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var n = arr.length;
console.log(findWater(arr,n));