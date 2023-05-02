# Reinicie o servidor TCP e agora faça uma requisição utilizando o cURL (HTTP).

# Perceba o que é exibido no console do server, já que não estamos utilizando
# o HTTP nele. Perceba também que o comando cURL não recebe uma resposta HTTP
# com sentido (um status code 200, por exemplo), de modo que ele não sabe que
# aquela requisição chegou ao fim.

# curl localhost:8085 causa um erro e não permite conexão
# curl 127.0.0.1 8085 funciona retorna um html
