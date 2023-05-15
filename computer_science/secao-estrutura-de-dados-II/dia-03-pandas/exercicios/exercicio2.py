# Com a finalidade de ter a visibilidade dos países com maior participação no
# compartilhamento global de transmissões, mostre na tela apenas os países com
# porcentagem de compartilhamento global (population_share) maior que 2.
from pprint import pprint
from exercicio1 import fifa_audience_csv

if __name__ == "__main__":
    df = fifa_audience_csv()
    pprint(df)

    population_share = df.loc[df["population_share"] > 2]

    pprint(population_share)
