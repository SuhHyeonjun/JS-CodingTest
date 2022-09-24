function solution(n) {
    const arr = n.toString().split("");
    console.log(arr);

    const sortA = arr.sort((a, b) => a - b);
    console.log(sortA);

    return parseInt(sortA.join(""));

}

console.log(solution(118372));