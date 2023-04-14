def rotate_array(arr: []) -> []:
    copy = arr[len(arr) - 1]
    for index in range(len(arr) - 1, -1, -1):
        arr[index] = arr[index - 1]
    arr[0] = copy
    return arr


print(rotate_array([1, 2, 3, 4, 5]))
