function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort((a, b) => a - b);
    console.log(d);
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        if (sum <= budget) {
            answer++;
        } 
    }
    return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));