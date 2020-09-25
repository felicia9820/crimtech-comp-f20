import math

def square_root(n):
    # Your code here!
    if (not isinstance(n, (int, float))):
        return -1
    elif (n < 0):
        return -1
    elif (n == 0):
        return 0
    else:
        return math.sqrt(n)

def test():
    assert square_root(4) == 2
    square_root(0) == 0
    assert square_root("hello") == -1
    assert square_root(-10) == -1
    print("Success!")

if __name__ == "__main__":
    test()

