function solution(s){
    let answer = true;
    let change = s.toLowerCase()

    let checkp = change.split('p').length;
    let checky = change.split('y').length;
    
    return answer = checkp === checky ? true : false;
    
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
