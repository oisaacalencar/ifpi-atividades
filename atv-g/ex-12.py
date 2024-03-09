def main():
    number = input("Digite um número qualquer:_ ")

    if number.isdecimal():
        return "Este número é decimal!"
    else:
        return "Este número não é decimal!"


print(main())
