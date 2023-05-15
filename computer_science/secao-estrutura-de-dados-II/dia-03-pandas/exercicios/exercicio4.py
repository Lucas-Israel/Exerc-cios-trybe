# O departamento comercial de sua empresa quer fazer um trabalho especial nos
# países que fazem parte da confederação CONMEBOL, portanto mostre na tela
# quais são eles.

from pprint import pprint
from exercicio1 import fifa_audience_csv

if __name__ == "__main__":
    df = fifa_audience_csv()
    pprint(df)

    paises_conmebol = df.loc[df["confederation"] == "CONMEBOL"]
    pprint(paises_conmebol)
