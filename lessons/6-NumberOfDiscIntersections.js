function solution(A) {
    let count = 0;
    for (let c1 = 0; c1 < A.length; c1++) {
        const r1 = A[c1];
        for (let c2 = c1 + 1; c2 < A.length; c2++) {
            const r2 = A[c2];
            if (c1 + r1 >= c2 - r2) {
                count++;
            }
        }
    }
    return count;
}

