function solution(n) {
    let three = n.toString(3);
    let reverse = three.split('').reverse().join('');
    return parseInt(reverse, 3);

}

console.log(solution(45));

/* 진법 변환

let value = 10;

value.toString(2);    // 1010
value.toString(8);    // 12
value.toString(16);   // a

var bin = 1010,
    oct = 12,
    hex = 'a';

// 2, 8, 16 진법 -> 10진법으로 변환
Number.parseInt(bin, 2);    // 10
Number.parseInt(oct, 8);    // 10
Number.parseInt(hex, 16);   // 10

*/