
//Compare the Triplets. 3 scores for 2 people. Gather their points. 
//a[0] < b[0]   a: 1 , b:0 
//a[1] > b[0]   a: 0 , b:1 
//a[2] == b[2]  a: 0 , b:0 


function compareTheTrip( a, b ){ 
    var aS =0;
    var bS = 0;
    var score = [];
    
    for(var i = 0; i < 3; i++){
        if(a[i] < b[i]){
            aS += 1;
        }
        if(a[i] > b[i]){
            bS += 1;
        }
    }
    score = [aS,bS]
    return score;
}

var alice = [2,1,5];
var bob = [1,2,5];
console.log(compareTheTrip(alice,bob));
