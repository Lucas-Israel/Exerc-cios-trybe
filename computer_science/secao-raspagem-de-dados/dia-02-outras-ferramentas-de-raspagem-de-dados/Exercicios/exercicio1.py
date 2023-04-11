# Exercício 1
# Com o Selenium, faça uma requisição para o endpoint
# “https://quotes.toscrape.com/“ e imprima a primeira citação que
# aparece na página.

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options


options = Options()
options.add_argument('--headless')

firefox = webdriver.Firefox(options=options)


def get_first_code(url):
    firefox.get(url)
    return firefox.find_element(
        By.CLASS_NAME, 'text').get_attribute('innerHTML')


if __name__ == '__main__':
    URL = 'https://quotes.toscrape.com/'
    a = get_first_code(URL)
    print(a)
