function solution (strs, t) {
    const tLen = t.length;
    const dp = new Array(tLen).fill(Infinity);
    

    for(let i = 0; i < tLen; i++) {
        //substr() : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환
      const current = t.substr(0, i+1);

    
      for(const str of strs) {

        // endsWith() : 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환
        if (current.endsWith(str)) {
          const diff = current.length - str.length;

          
          // 둘의 차가 0이라는 것은 서로 완벽히 일치함을 의미
          // 즉 해당 조각을 1번 사용하는 것으로 지금 문자열 완성 가능
          if (diff===0) {
            dp[i] = 1;
          } else {
            dp[i] = Math.min(dp[i], dp[diff-1] + 1);
          }
        }
      }
    }
    return dp[tLen-1] === Infinity ? -1 : dp[tLen-1];
  }


  
  console.log(solution(["ba","na","n","a"], "banana"));