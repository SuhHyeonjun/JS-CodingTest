function solution(s) {
    var answer = '';
    var arr = s.split(' ');
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 == 0) answer += arr[i][j].toUpperCase();
            else answer += arr[i][j].toLowerCase();
                 
        }
        if (i !== arr.length - 1) answer += ' '; // 마지막 단어가 아니면 공백 추가
    }

    return answer;
}

console.log(solution("try hello world"));
