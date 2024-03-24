from math import floor


def main():
    qnt_strawberries = float(input('Quntos kg morangos voce vai comprar?_'))
    qnt_apples = float(input('Quntas kg macas voce vai comprar?_'))

    strawberries = calculateValuePerKG(qnt_strawberries, 'mo')
    apples = calculateValuePerKG(qnt_apples, "ma")

    qnt_total = qnt_apples + qnt_strawberries

    total_price = calcTotal(strawberries, apples, qnt_total)

    print(f"""
          ;-;-; FEIRINHA ;-;;-;
          Morangos {qnt_strawberries} kg
          Maças {qnt_apples} Kg
          -----
          Total: R$ {total_price}
          """)


def calculateValuePerKG(qnt: float, fruit_type: str):
    if fruit_type.lower() == 'ma':
        if qnt <= 5.0:
            return qnt * 2.5
        else:
            return qnt * 2.2
    elif fruit_type.lower() == 'mo':
        if qnt <= 5.0:
            return qnt * 1.8
        else:
            return qnt * 1.5
    else:
        return 0.0


def calcTotal(apples, strawberries, total_quntity):
    total = apples + strawberries

    if total_quntity > 8 or total > 25.0:
        print("\n...aplicando desconto de 10%\n")
        return floor(total - (total * 0.1))
    else:
        return total


main()
