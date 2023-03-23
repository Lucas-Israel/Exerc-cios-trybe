import json


with open("data/pokemons.json") as file:
    pokemons = json.load(file)["results"]


# Separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# Abre o arquivo para escrevermos apenas o pokemons do tipo grama
with open("data/grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    )  # conversão de Python para o formato json (str)
    file.write(json_to_write)

print('\n' * 3)
print(pokemons[0])  # imprime o primeiro pokemon da lista
