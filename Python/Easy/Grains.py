  # should output the square of any number between 1 and 64
def square(number):
    if number <= 0 or number > 64:
        raise ValueError("square must be between 1 and 64")
    i = number - 1
    return 2 ** i

  # the total number of grains on the chessboard so far
def total(number=64):
    return sum(2**(i) for i in range(number))
