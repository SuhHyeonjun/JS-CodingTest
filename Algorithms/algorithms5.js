/* 수포자는 수학을 포기한 사람의 준말입니다. 
수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요. 

입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]

- 입출력 예 #1
수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

- 입출력 예 #2
모든 사람이 2문제씩을 맞췄습니다.
*/

/* 방법 1 */
function solution(answers) {
    let answer = [];
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5]
    let three = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let result = [0, 0, 0];


    for (let i = 0; i < answers.length; i++) {
      if (one[i % 5] === answers[i]) result[0]++;
      if (two[i % 8] === answers[i]) result[1]++;
      if (three[i % 10] === answers[i]) result[2]++;
    }

    let max = Math.max(result[0], result[1], result[2]);

    if (result[0] === max) answer.push(1);
    if (result[1] === max) answer.push(2);
    if (result[2] === max) answer.push(3);


    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

/* 방법 2 */
function solution(answers) {
  let answer = [];

    // 수포자들의 답안 패턴
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5]
  let three = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 맞춘 정답의 개수를 저장
  let oneResult = 0;
  let twoResult = 0;
  let threeResult = 0;

    // 정답과 수포자들의 답안을 비교
  for (let i = 0; i < answers.length; i++) {
    if (one[i % 5] === answers[i]) oneResult++;
    if (two[i % 8] === answers[i]) twoResult++;
    if (three[i % 10] === answers[i]) threeResult++;
  }

    // 가장 많이 맞춘 정답의 개수
  let max = Math.max(oneResult, twoResult, threeResult);

  if (oneResult === max) answer.push(1);
  if (twoResult === max) answer.push(2);
  if (threeResult === max) answer.push(3);


  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
