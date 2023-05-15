# Uma pessoa da equipe ficou curiosa sobre a quantidade de países em cada
# confederação, portanto mostre a ela essa informação.

# 💡 De olho na dica: caso queira renomear o nome da coluna que conterá a
# contagem dos países, você utilizar o método reset_index().

from pprint import pprint
from exercicio1 import fifa_audience_csv


if __name__ == "__main__":
    df = fifa_audience_csv()
    pprint(df)

    # group = df.groupby("confederation")["country"].count()
    # .reset_index(name="count")
    group = df.groupby("confederation")["country"].count()
    pprint(group.reset_index(name="count"))
