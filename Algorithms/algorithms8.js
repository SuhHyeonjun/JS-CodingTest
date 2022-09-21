function solution (strs, t) {
    const n = t.length;
    const dp = new Array(n).fill(Infinity);
    
// console.log(dp);

    for(let i = 0; i < n; i++) {
        //substr() : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환
      const current = t.substr(0, i+1);
    
    //   console.log(current);

    //   console.log(current.length);
    
      for(const str of strs) {
        // console.log(str);
        // endsWith() : 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 true 혹은 false로 반환
        if (current.endsWith(str)) {
          const diff = current.length - str.length;

        //   console.log(str);
            // console.log(diff);
          
          if (!diff) {
            dp[i] = 1;
          } else {
            dp[i] = Math.min(dp[i], dp[diff-1] + 1);
          }
        }
      }
    }
    return dp[n-1] === Infinity ? -1 : dp[n-1];
  }


  
  console.log(solution(["ba","na","n","a"], "banana"));