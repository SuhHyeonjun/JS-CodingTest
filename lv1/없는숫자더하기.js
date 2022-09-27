// function solution(numbers) {
//     var answer = -1;
//     var sum = 0;
//     for(var i=0; i<numbers.length; i++){
//         sum += numbers[i];
//     }
//     answer = 45 - sum;

//     return answer;
// }


// console.log(solution([1,2,3,4,6,7,8,0]));
// console.log(solution([5,8,4,0,6,7,9]));

/* 다른 풀이 */
function solution(numbers) {
    let answer = 0;
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) answer += i;
    }
    return answer;
}


console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution([5,8,4,0,6,7,9]));
