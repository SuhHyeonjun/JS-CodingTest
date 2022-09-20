function solution(sticker) {
  
    /* 점화식에서 i-2 값을 구하기 때문에 마이너스 값을 인덱스를 가르키는 것을 방지하고자 +2 */
    const len = sticker.length + 2;

    /* 스티커의 개수 만큼의 DP 배열을 모두 0으로 초기화 */
        // 1번째 스티커를 뜯는 dp배열
    const dp1 = new Array(len).fill(0);
        // 1번째 스티커를 뜯지 않는 dp배열
    const dp2 = new Array(len).fill(0);

    console.log(dp1)
    console.log(dp2)
    
        // 스티커가 하나밖에 없을 경우
    if(sticker.length === 1) return sticker[0];
    
        // 1번째 스티커를 뜯는 경우 마지막 스티커와 인접하므로 len-1 까지 반복한다.
    for(let i = 2; i < len-1; i++)
      dp1[i] = Math.max(dp1[i-1], dp1[i-2] + sticker[i-2]);

    console.log(dp1)


        // 2번재 스티커를 뜯는 경우 마지막 스티커와 인접하지 않으므로 len 까지 반복하며, i는 3부터 시작한다.
    for(let i = 3; i < len; i++) 
      dp2[i] = Math.max(dp2[i-1], dp2[i-2] + sticker[i-2]);

    console.log(dp2)
    
    /* 두 경우 중 최대값을 반환 */
    return Math.max(dp1[len-2], dp2[len-1]);
  }

  console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
