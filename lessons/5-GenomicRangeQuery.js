function solution(S, P, Q) {
    const cache = {};
    const output = new Array(P.length);
    for (let i = 0; i < output.length; i++) {
        const query = {
            p: P[i],
            q: Q[i]
        };
        let result = getResultFromCache(cache, query);
        if (result === false) {
            result = queryDna(S, query);
        }
        output[i] = result;
    }
    return output;
}

function getResultFromCache(cache, query) {
    const cid = String(query.p) + String(query.q);
    return cache[cid] === undefined ? false : cache[cid];
}

function queryDna(S, query) {
    const nucleotidToFactorMap = {
        A: 1,
        C: 2,
        G: 3,
        T: 4
    };
    let min = 4;
    for (let i = query.p; i <= query.q; i++) {
        const factor = nucleotidToFactorMap[S[i]];
        if (min > factor) {
            min = factor;
        }
    }
    return min;
}
