function solution(s){
    let answer = true;
    let change = s.toLowerCase()

    let checkp = change.split('p').length;
    let checky = change.split('y').length;
    
    return answer = checkp === checky ? true : false;
    
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));

/* .match() 사용 */
function solution(s){
    let answer = true;

    // .match(/찾을값/옵션)
    // 옵션 : /g 전체 찾기, /i 대소문자 구분 안함, /m 여러줄 찾기, /u 유니코드 찾기, gi 전체 찾기 대소문자 구분 안함)
    let checkp = s.match(/p/gi).length;
    let checky = s.match(/y/gi).length;

    console.log(checkp)
    console.log(checky)

    
    if (checkp === 0 && checky === 0) return true;
    return answer = checkp === checky ? true : false;
    
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
