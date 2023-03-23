# import os

# print(os.environ)

# print(os.environ["USER"])


# Outra opção para resgatar esses valores do nosso arquivo é através
# da biblioteca externa decouple. Sua instalação se dá via pip install
# python-decouple==3.6.
# Uma vez que a biblioteca está instalada e configurada, temos acesso
# simples e direto às nossas variáveis salvas em .env:


# from decouple import config

# API_USER = config("USER")
# API_KEY = config("KEY")
# DEBUG_MODE = config("DEBUG_MODE", default=False, cast=bool)

# print(os.environ['API_USER'])
