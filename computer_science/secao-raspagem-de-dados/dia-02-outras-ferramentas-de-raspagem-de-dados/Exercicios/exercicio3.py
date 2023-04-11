# Exercício 3
# Utilizando a ferramenta Selenium, no site “https://diolinux.com.br/“,
# faça a extração dos campos título, link para o post, trecho exibido de cada
# post da página inicial.
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options


options = Options()
options.add_argument('--headless')

firefox = webdriver.Firefox(options=options)


def get_title_and_link(url):
    firefox.get(url)
    new_list = []
    body = firefox.find_element(
        By.CLASS_NAME, 'inhype-postsgrid1-block-wrapper')
    a = body.find_elements(By.CLASS_NAME, 'col-md-4')
    for element in a:
        b = element.find_element(By.TAG_NAME, 'a')
        new_list.append({
            'title': element.get_attribute('innerText'),
            'link': b.get_attribute('href')
        })

    return new_list


if __name__ == '__main__':
    URL = 'https://diolinux.com.br/'
    a = get_title_and_link(URL)
    for b in a:
        print(b)
