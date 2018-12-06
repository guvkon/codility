function solution(A) {
    const isPointInside = (center, radius, point) => {
        return point >= center - radius && point <= center + radius;
    }
    
    const circlesAtPoint = Array(A.length);
    for (let i = 0; i < A.length; i++) {
        circlesAtPoint[i] = [];
        for (let j = 0; j < A.length; j++) {
            if (isPointInside(j, A[j], i)) {
                circlesAtPoint[i].push(j);
            }
        }
    }
    
    const intercepts = {};
    for (let i = 0; i < circlesAtPoint.length; i++) {
        for (let j = 0; j < circlesAtPoint[i].length; j++) {
            for (let k = 0; k < circlesAtPoint[i].length && k !== j; k++) {
                const pair = String(circlesAtPoint[i][j]) + '-' + String(circlesAtPoint[i][k]);
                intercepts[pair] = true;
            }
        }
    }
    
    let count = 0;
    for (let key in intercepts) {
        count++;
    }
    return count;
}
