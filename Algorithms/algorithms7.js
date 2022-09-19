function fibonacci(n,memo) {
	// memo 오브젝트를 캐시로 사용
    memo = memo || {}
    
    // 함수를 호출할 때, memo 가 인수로 수신되었는지 확인.
    if (memo[n]) {
        return memo[n]
    }
    
    // 입력받은 n에 대한 캐시된 값이 있는지 확인하고 캐시된 값이 있으면 값을 반환. 
    // n 이 1보다 작거나 같은 경우 if문 종료
    if (n <= 1) {
        return 1
    }
    
    // 캐시된 값 ( memo ) 를 각 함수에 전달 하면서 n 보다 작은 값을 가진 함수를 재귀적으로 호출.
    return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
}

console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))