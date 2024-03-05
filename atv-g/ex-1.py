def main():
    number = int(input("Digite um número qualquer:_"))

    if is_positive(number):
        return f"{number} eh um número positivo"
    else:
        return f"{number} eh um número negativo"


def is_positive(number: int) -> bool:
    return True if number > 0 else False


print(main())
