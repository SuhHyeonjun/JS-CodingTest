

function solution(today, terms, privacies) {
    let answer = [];
    let todayYear = parseInt(today.substr(0, 4));
    let todayMonth = parseInt(today.substr(5, 2));
    let todayDate = parseInt(today.substr(8, 2));
    let todayStr = todayYear + "-" + todayMonth + "-" + todayDate;
    let todayDateObj = new Date(todayStr);
    for (let i = 0; i < privacies.length; i++) {
        let dataYear = parseInt(privacies[i].substr(0, 4));
        let dataMonth = parseInt(privacies[i].substr(5, 2));
        let dataDate = parseInt(privacies[i].substr(8, 2));
        let dataStr = dataYear + "-" + dataMonth + "-" + dataDate;
        let dataDateObj = new Date(dataStr);
        let diff = todayDateObj - dataDateObj;
        let diffDay = diff / (1000 * 60 * 60 * 24);
        let term = ""+terms;
        let term2 = term.split(",");
        let term3 = term2[i];
        let term4 = term3.split(" ");
        let term5 = term4[1];
        console.log(term)
        console.log(term2)
        console.log(term3)
        console.log(term4)
        console.log(term5)
        
        if (diffDay >= term5 * 30) {
            answer.push(i + 1);
        }
    }
    return answer;
}



console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));

