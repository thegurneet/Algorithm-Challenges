//Print Consecutive numbers..

function processingInstruction(last, first){
    console.log(first++ + ' : ');
    for(var x = first; x <= last; x++){
        console.log(x);
    }
}

// 2N = (a^2 + a)
function findingN(N){
    for( var last=1; last<N; last++){
        for(var first = 0; first<last; first++){
            if(2*N == (last-first)*(last+first+1)){
                console.log(`last : ${last}`)
                console.log(`first: ${first}`)
                console.log(N + " = "); 
                processingInstruction(last, first+1);
                return;
            }
        }
    }

    console.log("-1")

}

findingN(100); 

