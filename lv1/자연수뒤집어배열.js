function solution(n) {
    let answer = [];
    let str = n.toString()
    for(let i = str.length-1; i >= 0; i--) {
        answer.push(parseInt(str[i]));
    }
    return answer;
}

console.log(solution(12345));