# Exercício 6:
# Escreva um programa que se conecte ao banco de dados library e liste os
# livros da coleção books para uma determinada categoria recebida por
# uma pessoa usuária. Somente o título dos livros deve ser exibido.


from pymongo import MongoClient


def book_listing(input):
    with MongoClient() as client:
        db = client.library
        list = []
        for book in db.books.find({"categories": input}, projection=["title"]):
            list.append(book)
        return list


if __name__ == '__main__':
    category = input(
        'Select a category: \n'
        '1 - Open Source\n'
        '2 - Mobile\n'
        '3 - Java\n'
        '4 - Software Engineering\n'
    )

    input_to_send = ''

    if category == 1:
        input_to_send = 'Open Source'
    if category == 2:
        input_to_send = 'Mobile'
    if category == 3:
        input_to_send = 'Java'
    if category == 4:
        input_to_send = 'Software Engineering'

    a = book_listing(input_to_send)
    for b in a:
        print(b)
