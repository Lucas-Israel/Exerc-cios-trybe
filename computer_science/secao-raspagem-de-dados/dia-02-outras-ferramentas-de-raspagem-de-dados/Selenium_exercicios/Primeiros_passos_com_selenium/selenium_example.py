# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
# from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys  # Importa teclas comuns

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()

# requisições para essa instância criada utilizando o método `get`
response = firefox.get("https://www.python.org/")

search_input = firefox.find_element("name", "q")
search_input.send_keys("selenium")
search_input.send_keys(Keys.ENTER)

# Caso você esteja utilizando o Selenium com Docker, seu código inicial
# será um pouco diferente, pois precisamos passar algumas opções e
# utilizar o método remote para vincular nosso arquivo de código ao
# container rodando na porta 7700. Portanto, seu código inicial ficará assim:

# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
# from time import sleep
# from selenium import webdriver

# # Para usar o chrome ao invés do firefox trocamos FirefoxOptions por
# # ChromeOptions
# # Todavia, caso esteja utilizando o docker, atente-se ao container sendo
# # utilizado.
# options = webdriver.FirefoxOptions()
# options.add_argument('--ignore-certificate-errors')
# options.add_argument('--ignore-ssl-errors=yes')
# options.add_argument('--start-maximized')

# firefox = webdriver.Remote(
#     command_executor="http://localhost:4444/wd/hub", options=options)

# # requisições para essa instância criada utilizando o método `get`
# response = firefox.get("https://www.python.org/")

# # espera 10 segundos
# sleep(10)
# # encerra o navegador, importante quando usamos containers
# firefox.quit()
