const sum=[0,1,2,3,4].reduce((prevVal , currentVal , index , array)=>(prevVal+currentVal) )

// console.log(sum);

//Metrix in js 
function Matrix(rows , columns){
    let  jaggedArray = new Array(rows)
    for(let i = 0; i<columns; i+=1){
        jaggedArray[i] = new Array(rows)
    }
    return jaggedArray
}

console.log( "Empty matrix : ",Matrix(3,3));

//print the matrix with value
function spiralPrint(M){
    let topRow = 0, 
        leftCol=0,
        btmRow =M.length -1,
        rightCol = M[0].length -1;
    while(topRow < btmRow && leftCol < rightCol){
        for(let col=0; col<=rightCol; col++){
            console.log(M[topRow][col]);
        }
        topRow++
        for(let row=topRow; row<=btmRow; row++){
            console.log(M[row][rightCol]);
        }
        rightCol--
        if(topRow<= btmRow){
            for(let col=rightCol; col>=0; col--){
                console.log(M[btmRow][col]);
            }
        }
        btmRow--
        if(leftCol<=rightCol){
            for(let row = btmRow; row>topRow; row--){
                console.log(M[row][leftCol]);
            }
            leftCol++
        }
    }
    
}

console.log(spiralPrint([
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20]
        ]));
