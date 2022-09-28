/* 이대로 푸니 solution([1,1,3,3,0,1,1]) [1,3,0] 이렇게 나옴 */
// function solution(arr) {
//     var answer = [];
//     for (let i = 0; i < arr.length; i++) {
//      if(arr.indexOf(arr[i]) === i) answer.push(arr[i]); // indexOf()는 배열의 첫번째 인덱스를 반환
//     }
//     console.log(answer);
//     return answer;
// }

function solution(arr) {
    let answer = [];
    for (let i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1]) answer.push(arr[i]);
    }
    return answer;
}


console.log(solution([1,1,3,3,0,1,1]));
console.log(solution([4,4,4,3,3]));


// 다른 사람의 풀이
// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);   
// }



