{/**
    To implement the skip rule you can build a "bad match table" 
    structure .The bad match table indicates how much to skip for 
    a given character of a pattern. some examples of various patterns 
    and it's correspondigm match tables are 

    PatternBad Match Table
    jam{j: 2, a: 1, m: 3}
    data{d: 3, a: 2, t: 1}
    struct{s: 5, t: 4, r: 3, u: 2, c: 1}
    roi{r: 2, o: 1, i: 3}
*/}

// function buildBadMatchTable(str){
//     var tableObj = {} , strLength = str.length;
//     for(let i = 0; i<strLength -1; i++){
//         tableObj[str[i]] = strLength -1 -i;
//     } 
//     if(tableObj[str[strLength-1] == undefined]){
//         tableObj[str[strLength -1]] == strLength
//     }
//     return tableObj
// }

function buildBadMatchTable(str) {
        var tableObj = {},
            strLength = str.length;
        for (var i = 0; i <  strLength - 1; i++) {
            tableObj[str[i]] = strLength - 1 - i;
        }
        if (tableObj[str[strLength-1]] == undefined) {
            tableObj[str[strLength-1]] = strLength;
        }
        return tableObj;
    }
function boyerMoor(str , pattern){
    let badMatchTable = buildBadMatchTable(pattern) , offSet =0, patternLastIndex = pattern.length -1,scanIndex = patternLastIndex , maxOffset =str.length -pattern.length;
    //if the offset is bigger than maxOffSet , cannot be found 
    while(offSet <= maxOffset){
        scanIndex = 0
        while(pattern[scanIndex] == str[scanIndex + offSet]){
            if(scanIndex == patternLastIndex){
                //found at this index
                return offSet
            }
            scanIndex++
        }
        let badMatchString = str[offSet + patternLastIndex]
        if(badMatchTable[badMatchString]){
            //increase the offset if it exists 
            offSet+= badMatchTable[badMatchString]
        }else{
            offSet+=1
        }
    }
    return -1
   
}

buildBadMatchTable('data');// {d: 3, a: 2, t: 1}
buildBadMatchTable('struct');// {s: 5, t: 4, r: 3, u: 2, c: 1}
buildBadMatchTable('roi');// {r: 2, o: 1, i: 3}
console.log(buildBadMatchTable('jam'));// {j: 2, a: 1, m: 3}

console.log(boyerMoor('jellyjam','jelly'));