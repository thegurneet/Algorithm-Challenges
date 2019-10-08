
/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix  is shown below:
*/


function printThis(a){

    for(var i = 0; i < a.length; i++){
        var b = ' '
        for(var x = 0; x < a[i].length; x++){
            b.concat(a[i][x]);
            console.log(b)
        }

    }

}


printThis([[1,2,3],[4,5,6],[7,8,9]])