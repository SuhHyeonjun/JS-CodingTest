function solution(n, m) {
    var answer = [];
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
        console.log(arr);
    }
    for (let i = 1; i <= m; i++) {
        if (m % i === 0) {
            if (arr.includes(i)) {
                answer.push(i);
            }
        }
    }
    // 최대공약수 = answer[answer.length - 1]
    // 최소공배수 = n * m / 최대공약수
    return [answer[answer.length - 1], n * m / answer[answer.length - 1]];
}

console.log(solution(3, 12));
console.log(solution(2, 5));