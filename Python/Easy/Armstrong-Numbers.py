def is_armstrong_number(number):
    num = str(number)
    sum = 0
    power = len(num)
    for digit in num:
        sum += int(digit) ** power
    return sum == number
