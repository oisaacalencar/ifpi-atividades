def main():
    letter = input("Digite uma letra qualuer:_")

    if letter in "aeiou":
        return "Vogal"
    else:
        return "Consoante"


print(main())
