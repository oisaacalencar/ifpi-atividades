def main():
    number = int(input("Digite um numero inteiro:_ "))

    week_day = ""

    if number == 1:
        week_day = "Domingo"
    elif number == 2:
        week_day = "Segunda"
    elif number == 3:
        week_day = "Terça"
    elif number == 4:
        week_day = "Quarta"
    elif number == 5:
        week_day = "Quinta"
    elif number == 6:
        week_day = "Sexta"
    elif number == 7:
        week_day = "Sábado"

    print(
        f"Dia da semana: {week_day}\n"
    )

    return 0


print(main())
