def find_maximum_sublist_sum(arr: list) -> int:
    highest_sum = float('-inf')
    for index1 in range(0, len(arr) - 1, 1):
        number_sum: int = 0
        for index2 in range(index1, len(arr) - 1, 1):
            number_sum += arr[index2]
            if number_sum > highest_sum:
                highest_sum = number_sum
    return highest_sum


print(find_maximum_sublist_sum([-4, 2 - 5, 1, 2, 3, 6, -5, 1]))
