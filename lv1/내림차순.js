function solution(n) {
    const arr = n.toString().split("");
    console.log(arr);

    const sortB = arr.sort((a, b) => b - a);
    console.log(sortB);

    return parseInt(sortB.join(""));
}

console.log(solution(118372));