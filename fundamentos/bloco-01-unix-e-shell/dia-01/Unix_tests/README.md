# Exercícios

## Criação de arquivos e diretórios

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.

2. Crie um arquivo de texto com o nome trybe.txt.

3. Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.

4. Renomeie o arquivo trybe.txt.

5. Dentro de unix_tests, crie um novo diretório chamado backup.

6. Mova o arquivo trybe_backup.txt para o diretório backup.

7. Dentro de unix_tests, crie um novo diretório chamado backup2.

8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.

9. Apague a pasta backup.

10. Renomeie a pasta backup2 para backup.

11. Veja qual é o path completo do diretório atual e liste todos os arquivos dentro dele.

12. Apague o diretório backup.

13. Limpe o terminal.

**De olho na dica 👀: Para os exercícios 14 e 15, crie manualmente na parte gráfica do seu sistema operacional (com o mouse) um arquivo de texto chamado skills.txt com o conteúdo abaixo.**

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

14. Mostre na tela as 5 primeiras skills do arquivo skills.txt.

15. Mostre na tela as 4 últimas skills do arquivo skills.txt.

16. Apague todos os arquivos que terminam em .txt.


## Manipulação e busca

1. Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

```
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

2. Mostre todo o conteúdo do arquivo countries.txt na tela.

3. Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia.

4. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.

5. Busque por Brazil no countries.txt.

6. Busque novamente por brazil , mas agora utilizando o *lower case*.

**Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.**

7. Busque pelas frases que não contenham a palavra fox.

8. Conte o número de palavras do arquivo phrases.txt.

9. Conte o número de linhas do arquivo phrases.txt.

10. Crie os arquivos empty.tbt e empty.pdf.

11. Liste todos os arquivos do diretório unix_tests.

12. Liste todos os arquivos que terminem com txt.

13. Liste todos os arquivos que terminem com tbt ou txt.

14. Acesse o manual do comando ls.


## Comandos de input e output

1. Crie a pasta unix_tests_skills e navegue até ela.

2. Crie um arquivo de texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, cada um em sua linha.

3. Adicione mais 5 itens à sua lista de skills e, depois, imprima a lista ordenada no terminal.

4. Conte o número de linhas do arquivo skills2.txt.

5. Crie um arquivo chamado top_skills.txt usando o skills2.txt. Ele deve conter as 3 primeiras skills em ordem alfabética.

6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

7. Conte o número de linhas que contêm as letras br.

8. Conte o número de linhas que não contêm as letras br.

9. Adicione dois nomes de países ao final do arquivo phrases2.txt.

10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt.

11. Ordene o arquivo bunch_of_things.txt.

## O despertar do terminal - Exercícios bônus

1. Se você utiliza o Linux🐧, abra o terminal e execute o comando sudo apt-get install cmatrix. Para pessoas usuárias de macOS🍎, utilize brew install cmatrix no terminal. Depois, execute o comando cmatrix. Aperte ctrl+c para voltar ao terminal.

2. No sistema Linux, execute o comando sudo apt-get install fortune. No macOS🍎, execute brew install fortune. Após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando.

3. Conte o número de palavras que a frase da sua sorte do dia tem.

4. Execute o comando sudo apt-get install sl em um terminal Linux, ou brew install sl em um terminal macOS. Após a instalação, execute o comando sl. Agora, tente sl -F.

5. No sistema Linux, execute o comando sudo apt-get install cowsay, ou brew install cowsay no macOS. Após a instalação, execute o comando cowsay e algo que você queira falar. Agora, faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt.

6. Descubra os fatores primos usando o comando factor e, em seguida, o número 42.

7. Veja como fica a sua sorte do dia ao contrário. Para isso, utilize o comando rev.

8. Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos.