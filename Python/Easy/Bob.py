def response(msg):
    # empty
    msg = msg.replace(" ","")
    # tab
    msg = msg.replace("\t","")
    # newline
    msg = msg.replace("\n","")
    # carriage return, beginning of the line
    msg = msg.replace("\r","")
    
    # all caps
    if msg.isupper():
        # [-1] == if ends with
        if msg[-1] == "?":
            # yell a question at him
            return "Calm down, I know what I'm doing!"
        # yell at him
        return "Whoa, chill out!"
      
    if msg == "":
        # address him without actually saying anything
        return "Fine. Be that way!"
        
    # [-1] == if ends with
    if msg[-1] == "?":
        # ask him a question
        return "Sure."
        
    # answer to anything else
    return "Whatever."
    
