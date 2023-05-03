# Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a
# demanda de analisar um array de números inteiros que representam os
# produtos dessa empresa. Verifique quantos produtos formam boas
# combinações, ou seja, quando um produto é igual ao outro e seu índice é
# maior que o anterior. Esta combinação pode ser utilizada para modificar
# os produtos de uma página. Por exemplo:

def good_product(arr):
    to_send = 0
    arr_len = len(arr)
    for i in range(arr_len):
        for i2 in range(i + 1, arr_len):
            if arr[i] == arr[i2]:
                to_send += 1
    return to_send

# O(n²)


def test_good_product():
    list_of_products_list = [[1, 3, 1, 1, 2, 3], [1, 1, 2, 3]]
    correct_answers = [4, 1]
    for index, produtos in enumerate(list_of_products_list):
        assert good_product(produtos) == correct_answers[index]
