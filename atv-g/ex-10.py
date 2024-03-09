def main():
    first_grade = float(input("Digite a primeira nota:_ "))
    second_grade = float(input("Digite a segunda nota:_ "))
    mean = first_grade + second_grade / 2

    avarage_performance = calc_avarage_performance(mean)
    if avarage_performance in "ABC":
        print(f"APROVADO - Nota Conceito {avarage_performance}")
    else:
        print(f"REPROVADO - Nota Conceito {avarage_performance}")

    return 0


def calc_avarage_performance(mean):
    if mean >= 9 or mean == 10:
        return "A"
    elif mean >= 7.5 and mean <= 9:
        return "B"
    elif mean >= 6.0 and mean <= 7.5:
        return "C"
    elif mean >= 4.0 and mean <= 6.0:
        return "D"
    elif mean >= 0 and mean  <= 4:
        return "E"
    else:
        return ""


print(main())
