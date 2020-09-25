def rm_smallest(d):
    # Your code here!
    if not bool(d):
        return d
    else:
        min_value = min(d.values())
        key_min = [key for key in d.keys() if d[key] == min_value]
        d.pop(key_min[0])
        return d

def test():
    assert 'a' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'b' in rm_smallest({'a':1,'b':-10}).keys()
    assert not 'a' in rm_smallest({'a':1,'b':5,'c':3}).keys()
    rm_smallest({})
    print("Success!")

if __name__ == "__main__":
    test()