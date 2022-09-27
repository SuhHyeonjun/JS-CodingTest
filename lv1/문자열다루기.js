// isNaN() - 매개변수가 숫자인지 검사하는 함수입니다.(NaN은 Not a Number입니다.)

function solution(s) {
    var answer = true;
    if (s.length === 4 || s.length === 6) {
    for (let i = 0; i <s.length; i++) {
        if (isNaN(s[i])) {
            return answer = false; 
        }
    }
    } else {
        answer = false;
    }
    return answer;
}
console.log(solution("a234"));
console.log(solution("1234"));
console.log(solution("123456"));
console.log(solution("1234567"));