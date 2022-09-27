function solution(numbers) {
    var answer = -1;
    var sum = 0;
    for(var i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    answer = 45 - sum;

    return answer;
}


console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution([5,8,4,0,6,7,9]));
