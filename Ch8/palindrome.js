{/** 
    Palindrome is a word spelled the same backward and forward such as deifien , racecar , testset ....
*/}

function isPlindromeRecursion(word){
    return isPalindromeHelper(word, 0 , word.length -1)
}

function isPalindromeHelper(word, beginPos , endPos){
    if(beginPos >= endPos){
        return true
    }
    if(word.charAt(beginPos) != word.charAt(endPos)){
        return false 
    }else {
        return isPalindromeHelper(word , beginPos +1 , endPos -1)
    }

}

console.log(isPlindromeRecursion("hih"));