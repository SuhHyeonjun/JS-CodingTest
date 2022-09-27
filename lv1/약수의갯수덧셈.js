function solution(left, right) {
    var answer = 0;
    let arr = [];
    for (let i = left; i <= right; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                arr.push(j)
            }
            console.log(arr);
    }   
    if (arr.length % 2 === 0) {
        answer += i
    } else { 
        answer -= i
    }
    arr = []; // arr 초기화, 초기화 안하면 arr에 값이 계속 쌓임
    console.log(arr);
}
    return answer;
}


console.log(solution(13, 17));
console.log(solution(24, 27));
