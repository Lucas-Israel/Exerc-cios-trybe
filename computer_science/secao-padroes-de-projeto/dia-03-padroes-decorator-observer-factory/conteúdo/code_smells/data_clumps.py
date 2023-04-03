# Data Clumps
# Ocorre quando um grupo de variáveis (como o endereço de entrega do exemplo
# que veremos abaixo) é passado junto como parâmetro em várias partes do
# programa.
# É indicativo de que esses grupos devam ser transformados em suas próprias
# classes.

# Exemplo
# Imagine que você tem um aplicativo que possui as funcionalidades de cadastro
# de pessoas e de empresas.
# Tanto as pessoas quanto as empresas possuem endereços.


# class User:
#     def __init__(self, name, age, street, number, district):
#         self.name = name
#         self.age = age
#         self.address_street = street
#         self.address_number = number
#         self.address_district = district

# ...


# Em algum outro lugar do código
# class Company:
#     def __init__(self, name, street, number, district):
#         self.name = name
#         self.address_street = street
#         self.address_number = number
#         self.address_district = district

# ...

# Percebe como os parâmetros street, number e district ficaram repetidos?
# Não só isso, mas eles fazem parte de algo que tem um significado ao
# juntar todos eles: um endereço.


# Soluções
# Uma possível solução para esse problema é criar uma classe somente para
# representar a entidade endereço:

from collections import namedtuple
from dataclasses import dataclass


class Address_0:
    def __init__(self, street, number, district):
        self.street = street
        self.number = number
        self.district = district


class User:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address


class Company:
    def __init__(self, name, address):
        self.name = name
        self.address = address


# Classes de dados
# A classe Address sugerida anteriormente serve basicamente para salvar dados.
# Ela não possui vários métodos e comporta-se como um repositório de dados,
# tornando sua semântica um pouco diferente daquela com qual já nos habituamos.

# Como é comum termos estes dois tipos de classe (as normais, que modelam
# entidades com comportamentos, e as classes de dados, que servem
# basicamente para agrupar conjuntos de dados), foi criada em
# Python uma estrutura que simplifica o uso de classes de dados:
# as dataclasses.
# O uso é feito por meio do decorador dataclasses.dataclass:


@dataclass
class Address:
    # Podemos colocar um valor padrão
    street = "Street"
    number = 0
    # Ou especificar o tipo do campo com anotações de tipo
    district: str


address = Address(district="District")

print(address.street, address.number, address.district)
# Street 0 District


# A dataclass Address pode ser utilizada da mesma forma que classe padrão
# Address definida no exemplo anterior. Observe que o __init__ não é mais
# necessário: como as dataclasses são feitas para guardar dados,
# somente definir os atributos no corpo da classe já é o suficiente
# para o acesso externo por meio da notação objeto.atributo.

# Geralmente dicas/anotações de tipo (type hints / type annotations) são
# utilizadas para especificar o tipo de dados dos atributos, neste caso
# ao invés de utilizarmos um valor padrão utilizamos a seguinte notação:

@dataclass
class Address:
    street: str
    number: int
    district: str


# A ordem de parâmetros pro construtor é a mesma da definição dos atributos
address = Address("Street", 0, "District")


# Tuplas nomeadas
# Há um terceiro problema no uso de dicionários que as dataclasses não
# resolvem: a duplicidade na declaração das chaves.
# Se você tiver 3 dicionários com as mesmas chaves, mas valores
# diferentes, você armazenará as chaves 3 vezes na memória.
# Pouco eficiente, não? Para isso existem as tuplas, onde não existem
# chaves nem acessos por meio da sintaxe objeto.atributo, visto que
# sabemos a ordem dos elementos. Por exemplo:

address1 = ("Street", 0, "District")
address2 = ("Street2", 1, "District2")
print(address1[0], address1[1], address1[2])
# Street 0 District


# Mas assim perdemos o antigo acesso no formato address.street, etc.
# É aí que o Python vem com outra estrutura bem interessante para utilizar
# essa sintaxe e resolver os três problemas do uso de dicionários:
# tuplas nomeadas.

# Namedtuples possuem pontos positivos e negativos também.
# Vamos às suas características:

# Os nomes dos “atributos” só são definidos uma vez, ou seja, sem ocupar
# memória repetida como no dicionário.
# Como são valores ordenados (e não indexados por chaves como nos dicionários),
# ocupam bem menos memória.
# Elas podem ser utilizadas de maneiras similares às dataclasses para acesso
# aos dados, utilizando a sintaxe objeto.atributo.
# Infelizmente tuplas são imutáveis, ou seja, os dados serão “somente leitura”,
# sem a possibilidade de alteração.


# from collections import namedtuple

# Definimos a tupla nomeada passando o nome dela e uma lista com os nomes dos
# atributos
Address = namedtuple("Address", ["street", "number", "district"])

# Criamos "instâncias" da tupla tal como criamos instâncias de classes normais
address1 = Address("Street", 0, "District")
# Podemos nomear os parâmetros para passá-los fora de ordem
address2 = Address("Street2", district="District2", number=1)

# Podemos acessar utilizando a sintaxe `objeto.atributo`
print(address1.street, address1.number, address1.district)
# Street 0 District

# Observe que o acesso por índice numérico ainda funciona, pois são tuplas
print(address1[0], address1[1], address1[2])
# Street 0 District

address1.district = "Aloha"  # ! AttributeError, pois tuplas são imutáveis
