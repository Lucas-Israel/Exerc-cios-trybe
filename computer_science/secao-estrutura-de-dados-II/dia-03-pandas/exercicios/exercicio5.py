# A gerência do seu setor quer fazer um trabalho para aumentar a média de
#  audiência nos países da confederação UEFA, porém ainda não se sabe qual a
#  média atual. Mostre a média de audiência dos países que fazem parte da
# confederação UEFA e limite em duas casas decimais.

from pprint import pprint
from exercicio1 import fifa_audience_csv

if __name__ == "__main__":
    df = fifa_audience_csv()
    pprint(df)

    uefa = df.loc[df["confederation"] == "UEFA"][
        ["country", "confederation", "tv_audience_share"]
    ]
    pprint(uefa)
    string = "{:.2f}".format(uefa["tv_audience_share"].mean())
    pprint(f"Média de audiência da UEFA: {string}")
