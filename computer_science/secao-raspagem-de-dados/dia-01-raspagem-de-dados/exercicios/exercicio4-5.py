# 🚀 Exercício 4:
# Baseando-se em uma página contendo detalhes sobre um livro
# (http://books.toscrape.com/catalogue/the-grand-design_405/index.html),
# faça a extração dos campos título, preço, descrição e url contendo a
# imagem de capa do livro.

# ⚠️ O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76.
# ⚠️ A descrição de ter o sufixo “more…” removido quando existir.
# ⚠️ Os campos extraídos devem ser apresentados separados por vírgula.
# Ex: título,preço,descrição,capa.

# 🚀 Exercício 5:
# Modifique o exercício anterior para retornar também quantos
# livros estão disponíveis, apresentando como último campo no retorno.

import requests
import parsel


def scrape_data_from_book_desc(url):
    result = requests.get(url)
    selector = parsel.Selector(result.text)

    title = selector.css('h1::text').get()
    price = selector.css(
        ".product_main > .price_color::text").re_first(r"\d*\.\d{2}")
    description = selector.css('#product_description ~ p::text').get()
    url_image = selector.css("#product_gallery img::attr(src)").get()
    available = selector.css(
        '.product_main .availability::text').re_first(r'\d')

    suffix = "...more"
    if description.endswith(suffix):
        description = description[:-len(suffix)]

    new_obj = {
        'title': title,
        'price': price,
        'description': description,
        'url_image': url_image,
        'available': available,
    }

    return new_obj


if __name__ == '__main__':
    URL = 'http://books.toscrape.com/catalogue/the-grand-design_405/index.html'
    a = scrape_data_from_book_desc(URL)
    print(a)
