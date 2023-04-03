# Exercício 1: Em Python, é possível imprimir uma saída colorida.
# Para isso, basta a string começar com um código da cor antes e terminar com
# um código que indica o fim da formatação.

ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

# print("\033[94mOlá Mundo!\033[0m")
# ou
# print(f"{ROXO}Olá Mundo!{RESET}")

# O recurso a seguir será utilizado para exibir logs coloridos no sistema.
# A classe Log() abaixo é responsável pela criação dos Logs:


class Log:
    def dispara_log(self, message):
        return message


class LogDecorado:
    def __init__(self, log: Log) -> None:
        self.__log = log

    def color_code(self, cor: str):
        return {
            'rosa': '\033[95m', 'roxo': '\033[94m', 'azul': '\033[96m',
            'verde': '\033[92m', 'laranja': '\033[93m', 'vermelho': '\033[91m',
            'negrito': '\033[1m', 'sublinhado': '\033[4m',
            'reset': '\033[0m'
        }.get(cor.lower())

    def dispara_log(self, cor: str, message):
        message_to_print = self.__log.dispara_log(message)
        color = self.color_code(cor)
        reset = self.color_code('reset')
        print(f'{color}{message_to_print}{reset}')


# Crie novas classes, LogError(), LogWarning, LogSuccess() com o padrão
# Decorator, para imprimir colorido as seguintes frases de Log:


class LogError():
    def __init__(self, log: Log):
        self.__log = log

    def dispara_log(self, mensagem):
        message = self.__log.dispara_log(mensagem)
        print(f'\033[91m{message}\033[0m')


class LogWarning():
    def __init__(self, log: Log):
        self.__log = log

    def dispara_log(self, mensagem):
        message = self.__log.dispara_log(mensagem)
        print(f'\033[93m{message}\033[0m')


class LogSuccess():
    def __init__(self, log: Log):
        self.__log = log

    def dispara_log(self, mensagem):
        message = self.__log.dispara_log(mensagem)
        print(f'\033[92m{message}\033[0m')


if __name__ == '__main__':
    log = Log()
    decorated_log = LogDecorado(log)
    error = LogError(log)
    warning = LogWarning(log)
    success = LogSuccess(log)
    decorated_log.dispara_log('roxo', 'decorated log message')
    error.dispara_log('error message')
    warning.dispara_log('warning message')
    success.dispara_log('success message')
