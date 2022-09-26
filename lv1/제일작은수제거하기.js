function solution(arr) {
    var answer = [];

    let min = Math.min(...arr);


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) answer.push(arr[i])
    }

    if (answer.length === 0) answer.push(-1)
    
    return answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));

