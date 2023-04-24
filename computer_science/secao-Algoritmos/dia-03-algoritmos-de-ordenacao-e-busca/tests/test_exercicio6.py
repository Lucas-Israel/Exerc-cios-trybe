from exercicios.exercicio6 import error_check

error_list1 = [True, True, True, True, False]
error_list2 = [True, True, False, False, False]
error_list3 = [False, False, False]
error_list4 = [True, True, True, True]
values = [4, 2, 0, -1]


def test_error_check():
    for index, list in enumerate((error_list1, error_list2, error_list3, error_list4)):
        assert error_check(list) == values[index]
