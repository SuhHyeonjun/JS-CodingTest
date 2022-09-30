function solution(s, n) {
    var answer = '';
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
        } else if (s[i] === s[i].toLowerCase()) {
            answer += abc[(abc.indexOf(s[i]) + n) % 26];
        } else answer += ABC[(ABC.indexOf(s[i]) + n) % 26];
            
        }
    
    return answer;
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));