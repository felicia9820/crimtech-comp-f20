def sum(lst, n):
    # Your code here!
    lst.sort()
    for i in range(len(lst)):
        j=1
        while (i + j) < len(lst):
            if (lst[i] + lst[i+j] == n):
                return True
            else:
                j += 1
                continue
    return False

def test():
    assert sum([-1, 1], 0)
    assert not sum([0,2,3], 4)
    assert sum([0,2,2], 4)
    print("Success!")

if __name__ == "__main__":
    test()