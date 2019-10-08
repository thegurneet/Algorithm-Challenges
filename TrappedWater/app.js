
//Trapped rain water

function findWater(array, n){
    var result = 0;
    var left_max = 0, right_max = 0; 

    var l = 0, r = n-1;

    while(l <= r){
        if(array[l] < array[r]){
            if(array[l] > left_max){
                left_max = array[l];
                console.log(`leftMax : ${left_max}`)
            } else {
                result += left_max - array[l];
                console.log(`result1: ${result} , ${left_max}, ${array[l]}`)
                l++;
            }
        } else {
            if(arr[r] > right_max){
                right_max = arr[r]
                console.log(`right max: ${right_max}`)
            } else {
                result += right_max - array[r];
                console.log(`result2: ${result} , left : ${left_max}, right:${right_max}, arrayLo: ${array[l]}, arrayHi: ${array[r]} `)
                r--;
            }
        }
    }
    return result;
}

var arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var n = arr.length;
console.log(findWater(arr,n));