/*
직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때, 나머지 한 점의 좌표를 구하려고 합니다. 
점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때, 
직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return 하도록 solution 함수를 완성해주세요. 
단, 직사각형의 각 변은 x축, y축에 평행하며, 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.
*/

function solution(v) {
    let answer = [
        []
    ];

    for(let i = 0; i < 3; i++) {
        answer[0] ^= v[i][0];
        answer[1] ^= v[i][1];
    }

    return answer;
}

console.log(solution([[1, 4], [3, 4], [3, 10]]));
console.log(solution([[1, 1], [2, 2], [1, 2]]));




/* 논리연산자 XOR(^)을 사용
세 값 중 두 개가 같고 나머지 하나가 다를 경우 그 다른 값을 반환 */
function solution(v) {
    let answer = [[]];   // 2차원 배열 

    
// x좌표 구하기
answer[0] = v[0][0] ^ v[1][0] ^ v[2][0]; // 두개 값이 같고 나머지 하나 값이 다를 시 다른 값 반환 (1, 3, 3)
    
// y좌표 구하기
answer[1] = v[0][1] ^ v[1][1] ^ v[2][1]; // 두개 값이 같고 나머지 하나 값이 다를 시 다른 값 반환 (4, 4, 10)

return answer;
}

console.log(solution([[1, 4], [3, 4], [3, 10]]));
console.log(solution([[1, 1], [2, 2], [1, 2]]));


/* 1차원 배열의 경우

    //push를 사용하는 경우
    
    var answer = []; // 1차원 배열
    
    answer.push(v[0][0]^v[1][0]^v[2][0]); // 배열의 요소로 넣음 
    answer.push(v[0][1]^v[1][1]^v[2][1]);
    
    return answer;

*/