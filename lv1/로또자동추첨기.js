// 로또 번호 추첨기
// 1. 1~45까지의 숫자 중 6개를 랜덤으로 뽑는다.
// 2. 뽑은 숫자를 오름차순으로 정렬한다.
// 3. 뽑은 숫자를 출력한다.
// 4. 보너스 번호를 뽑는다.
// 5. 중복된 값이 있을 경우 제거하여 출력한다.

function a1() {
    let arr = new Array(6);

        // 0 번째는 1 ~ 8까지의 숫자 중 랜덤으로 뽑는다.
        arr[0] = Math.floor(Math.random() * 8) + 1;
        arr.push(arr[0]);

        // 1 번째는 2 ~ 20까지의 숫자 중 랜덤으로 뽑는다.
        arr[1] = Math.floor(Math.random() * 17) + 3;
        arr.push(arr[1]);

        // 2 번째는 11 ~ 20까지의 숫자 중 랜덤으로 뽑는다.
        arr[2] = Math.floor(Math.random() * 10) + 11;
        arr.push(arr[2]);


        // 3 번째는 20 ~ 40까지의 숫자 중 랜덤으로 뽑는다.
        arr[3] = Math.floor(Math.random() * 26) + 20;
        arr.push(arr[3]);

        // 6 번째는 33 ~ 45까지의 숫자 중 랜덤으로 뽑는다.
        arr[4] = Math.floor(Math.random() * 13) + 33;
        arr.push(arr[4]);

        // 5 번째는 33 ~ 45까지의 숫자 중 랜덤으로 뽑는다.
        arr[5] = Math.floor(Math.random() * 13) + 33;
        arr.push(arr[5]);

        
            arr.sort((a, b) => a - b);   
            let bonus = Math.floor(Math.random() * 43) + 2;
            arr.push("  보너스 : " + bonus);
            return arr = [...new Set(arr)]
        }





console.log("(1)로또 당첨 번호는 : " + a1());



// 로또 번호 추첨기
// 1. 1~45까지의 숫자 중 6개를 랜덤으로 뽑는다.
// 2. 뽑은 숫자를 오름차순으로 정렬한다.
// 3. 뽑은 숫자를 출력한다.

function a2() {
    let answer = [];
    let arr = [];

    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 43) + 2;
        arr.push(num);
    }
    arr.sort((a, b) => a - b);   
    answer = arr;

    let bonus = Math.floor(Math.random() * 43) + 2;
    answer.push("  보너스 : " + bonus);

    return answer = [...new Set(answer)]; // 중복 제거
}

console.log("(2)로또 당첨 번호는 : " + a2());



// 로또 번호 추첨기 3

function a3() {
    let answer = [];
    let arr = [];

    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 43) + 2;
        arr.push(num);
    }
    arr.sort((a, b) => a - b);   
    answer = arr;

    let bonus = Math.floor(Math.random() * 43) + 2;
    answer.push("  보너스 : " + bonus);

    return answer = [...new Set(answer)]; // 중복 제거


}

console.log("(3)로또 당첨 번호는 : " + a3());


// 로또 번호 추첨기 4

function a4() {
    let answer = [];
    let arr = [];

    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 43) + 2;
        arr.push(num);
    }
    arr.sort((a, b) => a - b);   
    answer = arr;

    let bonus = Math.floor(Math.random() * 43) + 2;
    answer.push("  보너스 : " + bonus);

    return answer = [...new Set(answer)]; // 중복 제거


}

console.log("(4)로또 당첨 번호는 : " + a4());



// 로또 번호 추첨기 5

function a5() {
    let arr = [];

    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 43) + 2;
        arr.push(num);
    }
    arr.sort((a, b) => a - b);   

    let bonus = Math.floor(Math.random() * 43) + 2;
    arr.push("  보너스 : " + bonus);

    return arr = [...new Set(arr)]; // 중복 제거


}

console.log("(5)로또 당첨 번호는 : " + a5());