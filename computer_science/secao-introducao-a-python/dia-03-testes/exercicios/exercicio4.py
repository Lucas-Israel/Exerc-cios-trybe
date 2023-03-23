# Exercício 4 Baseado no exercício anterior, escreva uma função que, dado uma
# lista de emails, deve retornar somente os emails válidos.
# Caso uma exceção ocorra, apenas a escreva na tela.

# Exemplo: ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"] ->
# ["nome@dominio.com", "outro@dominio.com"].

if __name__ != '__main__':
    from exercicios.exercicio3 import email_validator
else:
    from exercicio3 import email_validator


def check_email_list(list: list):
    wrong_email = 'No wrong emails'
    for email in list:
        if not email_validator(email):
            wrong_email = email
    return wrong_email


if __name__ == '__main__':
    list = ['abc@def.com', 'aaa@bbb.ccc', 'zzz@zzz.zzz']
    print(check_email_list(list))
