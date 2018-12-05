function solution(A, B, K) {
    let count = 0;
    for (let number = A; number <= B; number++) {
        if (number % K === 0) {
            count++;
        }
    }
    return count;
}
