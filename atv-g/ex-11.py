def main():
    number = int(input("Digite um número inteiro menor que 1000:_ "))

    cents = get_numerical_order("C", number)
    decs = get_numerical_order("D", number)
    units = get_numerical_order("U", number)

    # plural para todos
    # plural quem precisar
    # conjunção ou virgula

    print(f"{cents}, {decs}, {units}")


def get_numerical_order(order: str, number: int) -> str:
    if order == "C":
        return number // 100

    elif order == "D":
        return number % 100 // 10

    elif order == "U":
        return number % 10


def pluralize_numerical_order() -> str:
    pass


print(main())
