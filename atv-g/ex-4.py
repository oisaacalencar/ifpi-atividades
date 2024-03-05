def main():
    first_grade = int(input("Informe a primeira nota:_"))
    second_grade = int(input("Informe a segunda nota:_"))

    situation = ""
    mean = (first_grade + second_grade) / 2

    if mean >= 7 and mean < 10:
        situation = "APROVADO ✅"
    elif mean <= 7:
        situation = "REPROVADO ❌"
    elif mean == 10:
        situation = "Aprovado com Distinção ✅ 🎊"

    print(
        f"""
    ======== CALCULADORA DE MEDIA ========
        Nota 1: {first_grade}
        Nota 1: {second_grade}
        ----------------------
        Media: {mean}
        -> Situação: {situation}
    """)


print(main())
