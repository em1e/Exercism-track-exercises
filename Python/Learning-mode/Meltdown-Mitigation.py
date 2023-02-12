  # boolean True if conditions met, False if not
def is_criticality_balanced(temperature, neutrons_emitted):
    product = temperature * neutrons_emitted
    if temperature >= 800 or neutrons_emitted <= 500:
        return False
    product_status = product < 500000
    return product_status

  # Function should return one efficiency color zone. 
def reactor_efficiency(voltage, current, theoretical_max_power):
    efficiency = ((voltage*current)/theoretical_max_power)*100
    if efficiency >= 80:
        color = "green"
    elif 80 > efficiency >= 60:
        color = "orange"
    elif 60 > efficiency >= 30:
        color = "red"
    elif 30 > efficiency:
        color = "black"
    else:
        color = "error"
    return color

  # Funtion should return the threshold for category.
def fail_safe(temperature, neutrons_produced_per_second, threshold):
    criticality = temperature * neutrons_produced_per_second * 100 / threshold
    if criticality < 90:
        urgency = "LOW"
    elif 90 <= criticality <= 110:
        urgency = "NORMAL"
    else:
        urgency = "DANGER"
    return urgency
    
