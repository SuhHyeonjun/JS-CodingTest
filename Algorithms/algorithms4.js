/* 가장 큰 정사각형 찾기 문제 */

function solution(board) {
    let answer = 0;
    const row = board.length;
    const column = board[0].length;
  
    if (row <= 1 || column <= 1) return 1;
  
    for (let i = 1; i < row; i++) {
      for (let j = 1; j < column; j++) {
        if (board[i][j] > 0) {
          const up = board[i - 1][j];
          const left = board[i][j - 1];
          const cross = board[i - 1][j - 1];
          const minNum = Math.min(up, left, cross);

          console.log(minNum);
          console.log(minNum+1);

          board[i][j] = minNum + 1;
          answer = Math.max(answer, board[i][j]);
        }
      }
    }
  
    return answer **2;
  }

console.log("----------------------------");
    console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]));
    console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]]));
console.log("----------------------------");
