function solution(x) {
    let toStr = x.toString().split("");
    console.log(toStr);
    let sum = 0;
    
    for (let i = 0; i < toStr.length; i++) {
        sum += parseInt(toStr[i]);
    }

    return x % sum === 0 ? true : false;

}
console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));