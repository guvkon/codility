function solution(A) {
    A.sort((a, b) => a - b);
    const uniques = [];
    const counter = {};
    for (let i = 0; i < A.length; i++) {
        const a = A[i];
        if (counter[a] === undefined) {
            counter[a] = 1;
            uniques.push(a);
        } else {
            counter[a]++;
        }
    }
    return hasTriangular(uniques, counter) ? 1 : 0;
}

function hasTriangular(uniques, counter) {
    for (let i = 0; i < uniques.length - 1; i++) {
        if (counter[uniques[i]] > 1) {
            if (isTriangular(uniques[i], uniques[i], uniques[i+1])) {
                return true;
            }
        }
        if (counter[uniques[i + 1]] > 1) {
            if (isTriangular(uniques[i], uniques[i+1], uniques[i+1])) {
                return true;
            }
        }
        if (i < uniques.length - 2) {
            if (isTriangular(uniques[i], uniques[i+1], uniques[i+2])) {
                return true;
            }
        }
    }
    return false;
}

function isTriangular(a, b, c) {
    return (
        (a + b > c) &&
        (c + a > b) &&
        (b + c > a)
    );
}
