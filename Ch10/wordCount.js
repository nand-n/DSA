function wordCount(sentence){
    let wordsArray = sentence.replace(/[.]/g,"").split(" "), occurenceList ={} , answerList={};

    for(let i =0; i<wordsArray.length; i++){
        let currentWord = wordsArray[i]
        if(!occurenceList[currentWord]){
            occurenceList[currentWord] = i
        }else{
            occurenceList[currentWord]++ 
        }
    }
    let arrTemp=[]
    for(let prop in occurenceList){
        arrTemp.push([occurenceList[prop] , prop])
    }
    function sortcomp(a , b){
        return b[0] - a[0]
    }
    arrTemp.sort(sortcomp)
    for(let i = 0; i<arrTemp.length; i++){
        let current = arrTemp[i]
        answerList[current[1]] = current[0]
    }
    return answerList
}