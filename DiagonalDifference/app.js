
/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix  is shown below:

1 2 3
4 5 6
7 8 9

 a = (1 + 5 + 9) - (3 + 5 + 7)
*/


function printThis(a){
    var b = ''
    for(var i = 0; i < a.length; i++){
        for(var x = 0; x < a[i].length; x++){
          b =   b.concat(a[i][x] + ' ');
        }
        console.log(b)
        b = '';
    }

    DiagonalDifference(a)
}


function DiagonalDifference(a){
    var h = 0;
    var p = 0;
    var left = 0
    var right = 0;

    for (let i = 0; i < a.length; i++){
        for(let y = 0; y < a[i].length; y++){
            if(y == h){
                left += a[i][y]
            }
        }
        h++;
    }

    for(let i = a.length ; i > 0 ; i--){
        for(let y = 0; y < a[i-1].length; y++){
            if(y == p){
                right += a[i-1][y]
            }
        }
        p++;
    }
    console.log(left - right)

}


printThis([[3,2,3,5],[4,5,6,6],[7,8,9,8],[5,2,6,4]])