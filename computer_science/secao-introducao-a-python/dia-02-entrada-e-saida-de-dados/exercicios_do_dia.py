# Exercício 1:
# Faça um programa que receba um nome e imprima o mesmo na vertical em escada
# invertida.
# Exemplo:

# Entrada:
# PEDRO

# Saída:
# PEDRO
# PEDR
# PED
# PE
# P


# def print_inverted_ladder(string: str):
#     ('''Receives a string and print it as an inverted ladder''')
#     for count in range(len(string)):
#         for index in range(len(string) - count):
#             print(string[index], end='')
#         print()


# print(print_inverted_ladder.__doc__)
# print_inverted_ladder('lucas')


# Exercício 2:
# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária
# tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra.
# Ao final, a palavra deve ser mostrada na tela, informando se a pessoa
# ganhou ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça:
# scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método
# choice: random.choice(["word1", "word2", "word3"]) -> "word2".

# import random


# def sorting_word(list):
#     '''Sort a word from a list'''
#     return random.choice(list)


# def scramble_word(word):
#     '''Receives a word and returns it scrambled'''
#     scrambled_word = "".join(random.sample(word, len(word)))
#     return scrambled_word


# def collect_input_return_bool(scrambled, game_rule_attempts, sorted):
#     ('''Check if an input returns true for the correct word or false '''
#      '''with a max attempt''')
#     for attempt in range(game_rule_attempts):
#         user_input = input(f'What is this word? {scrambled}: ')
#         if sorted == user_input:
#             return True
#     return False


# def game_message(boolean, sorted):
#     ('''Receives a boolean that if true returns a print with a success '''
#      '''message, if false returns a failure message, '''
#      '''both show the corret word''')
#     if boolean:
#         return print(f'You win! The answer was {sorted}')
#     print(f'You lose! The answer was {sorted}')


# # Exercício 3:
# # Modifique o exercício anterior para que as palavras sejam
# # lidas de um arquivo. Considere que o arquivo terá cada palavra
# # em uma linha.


# def get_list_from_file(file_path):
#     '''Reads a file and returns a list of words from it'''
#     list = []
#     with open(file_path, mode='r') as file:
#         for line in file:
#             list.append(line.strip())
#     return list


# if __name__ == '__main__':
#     game_rule_attempts = 3
#     list = get_list_from_file('data/palavras.txt')
#     sorted = sorting_word(list)
#     scrambled = scramble_word(sorted)
#     win_or_lose = collect_input_return_bool(
#         scrambled, game_rule_attempts, sorted)
#     game_message(win_or_lose, sorted)


# 🚀 Exercício 4:
# Dado o seguinte arquivo no formato JSON, leia seu conteúdo e calcule a
# porcentagem de livros em cada categoria em relação ao número total de livros.
# O resultado deve ser escrito em um arquivo no formato CSV
# como o exemplo abaixo.

# Saída:

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

# import json
# import csv


# def reading_json(json_file_path):
#     '''Reads a json file from the specified path'''
#     file_to_return = []
#     with open(json_file_path, mode='r') as file:
#         json_content = json.load(file)
#         file_to_return.append(json_content)
#     return file_to_return[0]


# def total_elements_in_a_list(list):
#     '''Reads a list and returns how many elements it has'''
#     return len(list)


# def books_categories_counter(list_with_json):
#     '''Reads a list and returns its categories'''
#     categories = {}
#     for element in list_with_json:
#         for category in element["categories"]:
#             if not categories.get(category):
#                 categories[category] = 0
#             categories[category] += 1
#     return categories


# def percentage_calculator(dict_of_categories, total_books):
#     ('''Receives a dict containing available categories with its '''
#      '''quantitites and total books, returns each percentage''')
#     new_list = [
#         [category, books / total_books]
#         for category, books in dict_of_categories.items()
#     ]
#     # for item in dict_of_categories:
#     #     obj = {item: dict_of_categories[item] / total_books}
#     #     new_list.append(obj)
#     # return new_list
#     return new_list


# def write_csv_report(file, header, rows):
#     writer = csv.writer(file)
#     writer.writerow(header)
#     writer.writerows(rows)


# if __name__ == '__main__':
#     json_to_use = reading_json('data/books.json')
#     how_many_books = total_elements_in_a_list(json_to_use)
#     dict_of_categories = books_categories_counter(json_to_use)
#     percentages = percentage_calculator(dict_of_categories, how_many_books)
#     header = ["categoria", "percentagem"]
#     with open("data/report.csv", "w") as file:
#         write_csv_report(file, header, percentages)


# Exercício 5: Utilizando o arquivo pokemons.json, vamos escrever um
# programa que sorteie um pokemon aleatoriamente.
# O programa deve perguntar à pessoa usuária “Quem é esse pokemon?”
# até que ela o acerte. A cada erro, apresente um número de letras do
# nome daquele pokemon igual ao número de erros.

# Exemplo: O pokemon sorteado pelo programa é butterfree; a pessoa usuária
# chuta charizard; o programa deve exibir b. Em seguida, a pessoa chuta
# blastoise; o programa deve exibir bu; e assim por diante até a pessoa
# acertar.

# 🦜 Você pode utilizar o método choice do modulo random para sortear
# aleatoriamente um pokemon. Ex: random.choice(pokemon) ->
# {"name": "Pikachu" }.

# import json
# import random


# def reading_pokemon_json(data_path):
#     '''reads a json from a path'''
#     with open(data_path, mode='r') as file:
#         return json.load(file)['results']


# def get_pokemon_name(json_data):
#     '''Retruns a pokemon name in a list'''
#     new_list = [pokemon['name'] for pokemon in json_data]
#     return new_list


# def sort_name(list):
#     '''Sort a name from a list'''
#     return random.choice(list)


# def collect_input_return_bool(sorted):
#     ('''Check if an input returns true for the correct word or false '''
#      '''with a max attempt''')
#     attempt = 0
#     new_name = ''
#     for attempt in range(len(sorted) - 1):
#         new_name += sorted[attempt]
#         user_input = input(f'What is this word? {new_name}: ')
#         attempt += 1
#         if sorted == user_input:
#             return True
#     return False


# def game_message(boolean, sorted):
#     ('''Receives a boolean that if true returns a print with a success '''
#      '''message, if false returns a failure message, '''
#      '''both show the corret word''')
#     if boolean:
#         return print(f'You win! The answer was {sorted}')
#     print(f'You lose! The answer was {sorted}')


# if __name__ == '__main__':
#     json_data = reading_pokemon_json('data/pokemons.json')
#     list_poke_name = get_pokemon_name(json_data)
#     sorted = sort_name(list_poke_name)
#     guessed = collect_input_return_bool(sorted)
#     game_message(guessed, sorted)
