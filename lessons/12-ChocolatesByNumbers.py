def gcd(a, b):
    if b > a:
        return gcd(b, a)
    elif a % b == 0:
        return b
    else:
        return gcd(b, a % b)

def lcm(a, b):
    return a * b // gcd(a, b)

def solution(N, M):
    return lcm(N, M) // M

