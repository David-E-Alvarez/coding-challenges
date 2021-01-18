def alphabeticShift(inputString):
    new_str = ""
    for letter in inputString:
        #print("letter: ", letter)
        if letter == 'z':
            letter = chr(96)
        letter = ord(letter) + 1
        new_str += chr(letter)
        #print("updated letter: ", chr(letter))
    return new_str
