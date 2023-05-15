# Sua liderança gostaria de ter uma visão geral sobre as informações contidas
# na base de dados fifa_audience.

import pandas as pd


def fifa_audience_csv():
    df = pd.read_csv("data/fifa_audience.csv")
    return df
