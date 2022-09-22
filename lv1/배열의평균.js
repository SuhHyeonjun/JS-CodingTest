/* 평균 = 배열의 합 / 배열의 길이 */

function solution(arr) {
    const answer = arr.reduce((sum, cur) => sum + cur, 0);
    return answer/arr.length;
}


console.log(solution([1,2,3,4]));
console.log(solution([5,5]));
