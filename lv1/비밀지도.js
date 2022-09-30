function solution(n, arr1, arr2) {
    var answer = [];
    let arr = [];
    
    for (let i = 0; i < n; i++) {
        // | : 비트연산자 OR (두 비트를 비교하여 하나라도 1이면 1)
        arr.push((arr1[i] | arr2[i]).toString(2)); 
    }
    console.log(arr);

    for (let i = 0; i < n; i++) {
        let str = '';
        // arr[i]의 길이가 n보다 작으면 앞에 0을 채워준다.
        // 이유 : n 6일 때 11111으로 5자리가 나올 경우 " #####"이 아닌 "##### "이 나오기 때문
        for (let j = arr[i].length-n; j < arr[i].length; j++) {
            if (arr[i][j] === '1') {
                str += '#';
            } else str += ' ';
        }
        answer.push(str);
    }

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));
