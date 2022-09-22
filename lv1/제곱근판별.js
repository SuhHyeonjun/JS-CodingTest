function solution(n) {
    let answer = 0;
    // Math.sqrt() 메서드는 제곱근을 반환.
    const sqrt = Math.sqrt(n) 
    // 제곱근이 정수라면
    if (Number.isInteger(sqrt)) {
        // 제곱근 ** 2 ( 2제곱 )
        answer = (sqrt + 1) **2
    } else {
        // 제곱근이 정수가 아니라면 -1
        answer = -1
    }
    return answer;
}
