/*
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
*/

function solution(n)
{
    let answer = 0;
        // toString() - 문자열로 변환하는 함수
    let str = n.toString();
    for(let i = 0; i<str.length;i++){
        // parseInt() - 문자열을 정수로 바꾸는 함수
        answer += parseInt(str[i])
    }
    return answer;
}

console.log(solution(123));
console.log(solution(987));

