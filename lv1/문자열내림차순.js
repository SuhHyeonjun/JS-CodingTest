// 문자열 내림, 오름 차순은 sort() 함수를 사용
// 숫자 내림 , 오름 차순은 sort(a, b) => a - b 를 사용

function solution(s) {
    return s.split("").sort().reverse().join("");
}

console.log(solution("Zbcdefg"));
console.log(solution("bcaAehg"));