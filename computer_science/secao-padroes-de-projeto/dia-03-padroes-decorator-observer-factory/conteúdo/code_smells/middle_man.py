# Middle Man
# Homem do meio (middle man) é um code smell que ocorre quando uma classe
# existe somente por um motivo (o que por si só é algo bom), só que o motivo é
# delegar uma ação para outra.

# Exemplo
# Temos uma plataforma onde a pessoa jogadora (Player) participa de torneios
# (Tournament) de jogos (Game).
# Nesta plataforma, temos um código cliente que precisa consultar os torneios
# de poker de uma pessoa jogadora.

# Para fins de uso desse exemplo, utilizaremos a pessoa jogadora com id=1 e o
# jogo de tabuleiro que ela comprou também com id=1.

class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Game(game_id).tournaments()


class Game:
    """Classe que só possui o método de filtrar os torneios"""

    def __init__(self, game_id):
        self.game_id = game_id

    def tournaments(self):
        return Tournament.query.filter(game_id=self.game_id).all()


class Tournament:
    """Classe contendo vários métodos e que herda de algum banco de dados"""


# Código cliente
player = Player(id=1)
print(player.tournaments(1))


# A classe Game, especificamente neste exemplo onde ela não possui mais
# métodos ou atributos, tem pouco ou nenhum impacto sobre as regras de negócio.

# Se uma classe somente delega uma ação para outra, por que deveria existir?
# Remova o que fica no meio!

class Player:
    # ...

    def tournaments(self, game_id):
        """Retorna os torneios de um jogo da pessoa"""
        return Tournament.query.filter(game_id=game_id, user_id=self.id).all()


# class Tournament:
#     """Classe contendo vários métodos e que herda de algum banco de dados"""


# Código cliente
player = Player(id=1)
print(player.tournaments(1))
