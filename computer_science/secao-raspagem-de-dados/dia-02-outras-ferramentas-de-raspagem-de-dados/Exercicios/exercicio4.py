# Exercício 4
# Com o Beautiful Soup, faça a extração de todos os links da página
# “https://pt.wikipedia.org/wiki/Rock_in_Rio”

# ✨ Dica: Dê uma espiada na seção sobre atributos na documentação da
# ferramenta.

import requests
from bs4 import BeautifulSoup


def souping_url(url):
    page = requests.get(url)
    html_page = page.text

    soup = BeautifulSoup(html_page, "html.parser")
    soup.prettify()
    return soup


def get_links(URL):
    soup = souping_url(URL)
    new_list = []
    for element in soup.find_all('a'):
        new_list.append(element.get('href'))
    return new_list


if __name__ == "__main__":
    URL = 'https://pt.wikipedia.org/wiki/Rock_in_Rio'
    a = get_links(URL)
    count = 1
    for b in a:
        print(f'{b} {count}\n')
        count += 1
