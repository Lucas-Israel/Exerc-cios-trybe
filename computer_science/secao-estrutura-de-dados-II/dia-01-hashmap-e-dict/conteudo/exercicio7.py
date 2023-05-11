def odd_to_triple(some_dict):
    for element in some_dict:
        if element % 2 != 0:
            some_dict[element] += element
