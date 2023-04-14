def get_sum_of_integers_divisible_by_3_between_1_and_30() -> int:
    sum: int = 0
    for number in range(1, 31, 1):
        if number % 3 == 0:
            print(number)
            sum += number
    return sum


print(get_sum_of_integers_divisible_by_3_between_1_and_30())