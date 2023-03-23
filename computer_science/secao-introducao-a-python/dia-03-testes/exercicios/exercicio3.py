# Exercício 3 Faça uma função que valide um e-mail, lançando uma exceção
# quando o valor for inválido.
# Endereços de e-mail válidos devem seguir as seguintes regras:

# Devem seguir o formato nomeusuario@nomewebsite.extensao;

# O nome de usuário deve conter somente letras, dígitos, traços e
# underscores (_);

# O nome de usuário deve iniciar com uma letra;

# O nome do website deve conter somente letras e dígitos;

# O tamanho máximo da extensão é de 3 caracteres.

# 🦜 As funções isalpha, isdigit e isnumeric podem ser utilizadas para
# verificar se uma letra ou palavra são compostas de somente caracteres ou
# dígitos. Exemplo: "1".isalpha() -> False , "a".isalpha() -> True,
# "123".isnumeric() -> True.


def email_validator(email_string: str):
    import re

    regex = re.compile(
        r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
    begining = email_string.split('@')[0]
    end = email_string.split('.')[1]

    if not len(end) == 3:
        return False
    if not begining[0].isalpha():
        return False
    if not re.fullmatch(regex, email_string):
        return False
    return True


def test(numero: int, numero2: int):
    try:
        if numero > 0:
            print(numero + numero2)
    except TypeError:
        print('except')
    else:
        print('else')
    finally:
        print('finaly')


if __name__ == '__main__':
    email_validator('abc@def.com')
    test('a', 2)
