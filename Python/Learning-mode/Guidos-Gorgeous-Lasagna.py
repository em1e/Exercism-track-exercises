EXPECTED_BAKE_TIME = 40
PEPARATION_TIME = 2

  # Calculate the bake time remaining.
def bake_time_remaining(elapsed_bake_time):
    return EXPECTED_BAKE_TIME - elapsed_bake_time
bake_time_remaining(30)


  # Calculate the preparation time.
def preparation_time_in_minutes(number_of_layers):
    return number_of_layers * PEPARATION_TIME
preparation_time_in_minutes(2)

  # Calculate the elapsed time.
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time
elapsed_time_in_minutes(2,30)
