function solution(n, arr1, arr2) {
    var answer = [];

    
    for (let i = 0; i < n; i++) {
        // | : 비트연산자 OR (두 비트를 비교하여 하나라도 1이면 1)
        const bin = (arr1[i] | arr2[i]).toString(2); 

        console.log(bin);
        let arr = [];
        for (let j = bin.length-n; j < bin.length; j++) {
            if (bin[j] === '1') {
                arr.push('#');
            } else arr.push(' ');
        }
    
        answer.push(arr.join(''));
    }

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));
