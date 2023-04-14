def convert_to_decimal(binary: str) -> int:
    result: int = 0
    count: int = 0
    for i in range(-1, (-(len(binary))) - 1, -1):
        result += (2 ** count) * int(binary.__getitem__(i))
        count += 1
    return result


print(convert_to_decimal("1101"))
