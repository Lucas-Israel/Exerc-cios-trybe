# Exercício 8: Agora um desafio! Vá ao site
# https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags
# e recupere as imagens de todas as bandeiras.

import requests
import parsel


def abc(url):
    result = requests.get(url)
    selector = parsel.Selector(result.text)
    flags = selector.css('.gallerybox .image img::attr(src)').getall()

    return flags


if __name__ == '__main__':
    URL = 'https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags'
    a = abc(URL)
    for b in a:
        print(b)
