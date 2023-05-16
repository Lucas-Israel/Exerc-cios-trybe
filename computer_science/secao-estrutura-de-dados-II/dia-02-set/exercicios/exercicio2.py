# Dada uma string, ache o tamanho da maior substring que não tenha caracteres
# repetidos. Complexidade de tempo limite aceitável: O(n²).

# string = "serdevemuitolegalmasehprecisoestudarbastante"


def no_repeat_finder(string):
    biggest = 0
    substr = set()
    for letter in string:
        if letter in substr:
            substr = set()
        substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest


if __name__ == "__main__":
    a = no_repeat_finder("abbcde")
    print(a)
    print(a == 4)
