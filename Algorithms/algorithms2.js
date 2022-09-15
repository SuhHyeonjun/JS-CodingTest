
/* 길이가 n인 배열에 1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 합니다. 
1부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록 함수 solution을 완성해주세요. */

function solution(arr) {
    let answer= true;    
    let getNewArr = arr.sort();
      for (let i = 0; i < getNewArr.length; i++){
          if(getNewArr[i] != i+1)
             return answer = false;
      }
      return answer;
   }

console.log(solution([4,1,3]));
console.log(solution([1,2,3]));
console.log(solution([9,8,7]));



/* Math.max 메서드 사용 */
function solution(arr) {
   let answer = true;

   console.log(arr.length);

      // 입력받은 값중 가장 큰 수를 반환.
   let max = Math.max(arr);
   answer = (max === arr.length) ? true : false;
   return answer;
}

console.log(solution([4,1,3]));
console.log(solution([1,2,3]));
console.log(solution([9,8,7]));