function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    // .forEach : 배열의 요소를 하나씩 한줄로 문자열로 기록
    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )


    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    // .map : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
    // .join : 배열의 모든 요소를 연결해 하나의 문자열로 만듬
    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}
