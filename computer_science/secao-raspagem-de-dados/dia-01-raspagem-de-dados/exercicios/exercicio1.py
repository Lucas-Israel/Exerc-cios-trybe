# Exercício 1:
# Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu
# conteúdo de forma legível.

import requests


def get_url_data(url):
    data = requests.get(url)
    return data.json()


if __name__ == '__main__':
    URL = 'https://httpbin.org/encoding/utf8'
    a = get_url_data(URL)
    print(a)
