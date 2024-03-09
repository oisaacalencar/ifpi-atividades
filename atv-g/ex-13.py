def main():
    counter = 0

    print("Responda com 's' ou 'n' para as seguints perguntas")
    question1 = input("Telefonou para a vítima ?")
    question2 = input("Esteve no local do crime ?")
    question3 = input("Mora perto da vítima ?")
    question4 = input("Devia para a vítima ?")
    question4 = input("Já trabalhou com a vítima ?")

    if question1.lower == "s":
        counter += 1
    elif question2.lower == "s":
        counter += 1
    elif question3.lower == "s":
        counter += 1
    elif question4.lower == "s":
        counter += 1

    print(counter)
    # if counter == 2:
    #     return "Você é Suspeito"
    # elif counter == 3 or counter == 4:
    #     return "Você é o cúmplice"
    # elif counter == 5:
    #     return "Você é o assasino"
    # else:
    #     return "Você é inocente"


print(main())
