# Exercício 2
# Imprima todos os parágrafos da página
# “https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/“.

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options


options = Options()
options.add_argument('--headless')

firefox = webdriver.Firefox(options=options)


def get_all_paragraphs(url):
    firefox.get(url)
    new_list = []
    for element in firefox.find_elements(
            By.TAG_NAME, 'p'):
        new_list.append(element.get_attribute('innerText') + '\n')

    return new_list


if __name__ == "__main__":
    URL1 = 'https://www.wikimetal.com.br'
    URL2 = '/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/'
    URL3 = URL1+URL2
    a = get_all_paragraphs(URL3)
    for b in a:
        print(b)
