# Exercício 2:
# Faça uma requisição ao recurso usuários da API do Github
# (https://api.github.com/users), exibindo o username e url de
# todos os usuários retornados.

if __name__ == '__main__':
    from exercicio1 import get_url_data
else:
    from exercicios.exercicio1 import get_url_data


def username_and_url_from_site(url):
    data = get_url_data(url)
    new_list = []

    for user in data:
        new_obj = {
            'username': user['login'],
            'url': user['url']
        }
        new_list.append(new_obj)

    return new_list


if __name__ == '__main__':
    URL = 'https://api.github.com/users'
    a = username_and_url_from_site(URL)
    for b in a:
        print(b)
