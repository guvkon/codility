function solution(S) {
    const map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    
    const isNested = (S) => {
        if (S.length === 0) {
            return true;
        }
        const closePosition = getClosePosition(S);
        if (closePosition === false) {
            return false;
        }
        return isNested(S.slice(1, closePosition)) && isNested(S.slice(closePosition + 1));
    }
    
    const getClosePosition = (S) => {
        const open = S[0];
        const close = map[open];
        let counter = 0;
        for (let i = 1; i < S.length; i++) {
            if (counter === 0 && S[i] === close) {
                return i;
            }
            switch (S[i]) {
                case open:
                    counter++;
                    break;
                case close:
                    counter--;
                    break;
            }
        }
        return false;
    }
    
    return Number(isNested(S));
}
