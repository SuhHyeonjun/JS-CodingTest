function solution(sizes) {
    let w = []; // 가로
    let h = []; // 세로


    // 길이가 큰 것이 가로, 작은 것이 세로가 될 것이다.
    for (let i = 0; i < sizes.length; i++) {
        let max = Math.max(sizes[i][0], sizes[i][1]);  // 가로, 세로 중 큰 값
        let min = Math.min(sizes[i][0], sizes[i][1]); // 가로, 세로 중 작은 값
        w.push(max);
        h.push(min);
        console.log(w, h);
        

    }
    return Math.max(...w) * Math.max(...h); 
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));

