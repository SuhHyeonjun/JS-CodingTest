
function solution(arr) {
    const answer = arr.reduce((sum, cur) => sum + cur, 0)
    return answer;
}

    console.log(solution([1,2,3,4]))
    console.log(solution([5,5]))


    function solution(arr) {
        const answer = arr.reduce(function add(sum, cur) {
            return sum + cur
        }, 0)
        return answer;

    }

    console.log(solution([1,2,3,4]))
    console.log(solution([5,5]))
