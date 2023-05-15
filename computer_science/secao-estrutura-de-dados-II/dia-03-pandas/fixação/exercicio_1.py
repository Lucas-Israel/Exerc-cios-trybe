# Crie um novo DataFrame a partir de um dicionário que contém três pares de
# chave-valor. O primeiro par terá os nomes de seus amigos mais próximos, já o
# segundo terá o prato preferido de cada amigo, o terceiro e último par terá
# a sobremesa preferida deles. Confira se a saída condiz com o resultado
# esperado.


import pandas as pd

amigos = ["Aldo", "Baldo", "Caldo"]
prato = ["A_prato", "B_prato", "C_prato"]
sobremesa = ["A_sobre", "B_sobre", "C_sobre"]

new_dict = {"amigos": amigos, "prato": prato, "sobremesa": sobremesa}

d_frame = pd.DataFrame(new_dict)

# print(d_frame)
