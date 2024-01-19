{/**
    Given a distance , n , count the total number of ways to cover 
    n number of steps with one , two , and three steps.
    EXAMPLE : when n = 3 there are four combination(ways) 
*/}

function waysToCoverSteps(step){
    if(step <0) return 0
    if(step == 0) return 1
    return waysToCoverSteps(step -1) -waysToCoverSteps(step-2)
}

waysToCoverSteps(12)

//Time complexity : O(3^n)