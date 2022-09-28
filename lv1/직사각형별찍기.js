process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { //입력받은 숫자를 'data에 받는다'
    const n = data.split(" "); // data(입력받은 숫자)를 배열로 변경
    const a = Number(n[0]) // a는 한줄에대한 별의 갯수
    const b = Number(n[1]); //b는 몇줄 출력할지
  
    // 입력 값 b 만큼 반복문을 돌린다.
  for (let i = 0; i < b; i++) {
    
    // stars 변수를 초기화 해준다.
    let stars = "";

    // 위 for문이 한번 돌아갈 때 마다 입력 값 a 만큼 반복문을 돌린다.
    for (let j = 0; j < a; j++) {
      stars += "*";
    }

    console.log(stars);

    // i가 b(3) 보다 작을 경우 맨 위로가 다시 for문을 시행한다.
  }
});

