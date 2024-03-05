def main():
    letter = input("Digite uma letra qualuer:_")

    if letter.lower() == "m":
        return "Masculino"
    if letter.lower() == "f":
        return "Feminino"
    else:
        return "Sexo Inválido!"


print(main())
