// isNaN() - 매개변수가 숫자인지 검사하는 함수입니다.(NaN은 Not a Number입니다.)
// 숫자가 아닌 경우 true를 반환합니다. , 숫자인 경우 false를 반환합니다.

/*
// isNaN([i]) 는 반대인듯.
    * 1. s의 길이가 4 또는 6이 아니면 false
    * 2. s의 길이가 4 또는 6이면
    * 3. s의 각 요소가 숫자인지 검사
    * 4. 숫자가 아닌 요소가 있으면 false
    * 5. 숫자인 요소가 있으면 true
*/

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
console.log(solution(1234));

console.log(isNaN("123456"));
console.log(isNaN("a3456"));
console.log(isNaN("124a"));