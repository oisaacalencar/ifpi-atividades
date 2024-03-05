def main():
    student_shift = input("Em que turno o aluno estuda:_")
    greetings = ""

    if student_shift == "M":
        greetings = "Bom dia, aluno!"
    elif student_shift == "V":
        greetings = "Boa tarde, aluno!"
    elif student_shift == "N":
        greetings = "Boa noite, aluno!"
    else:
        print("Turno inválido!")
        return

    print(
        f"""
    ======== SAUDAÇÕES ========
    {greetings}
    """)


print(main())
