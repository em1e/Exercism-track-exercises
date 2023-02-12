  # Function should return the value of the exchanged currency.
def exchange_money(budget, exchange_rate):
    return budget / exchange_rate

  # Function should return the amount of money that is left from the budget.
def get_change(budget, exchanging_value):
    return budget - exchanging_value

  # Function should return the total value of bills you now have.
def get_value_of_bills(denomination, number_of_bills):
    return denomination * number_of_bills

  # Function should return the number of bills after exchanging all your money.
def get_number_of_bills(budget, denomination):
    return budget // denomination

  # Function should return the leftover amount that cannot be exchanged given the current denomination.
def get_leftover_of_bills(budget, denomination):
    return budget % denomination

  # Function should return the maximum value you can get.
def exchangeable_value(budget, exchange_rate, spread, denomination):
    return ((budget/(exchange_rate+exchange_rate*spread/100))//denomination)*denomination
