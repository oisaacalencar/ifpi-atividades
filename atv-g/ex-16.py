from math import floor


def main():
    meat_type = input('Que carne voce vai comprar?_')
    qnt_meat = float(
        input('Quntos kg de carne voce vai comprar?(Alcatra/File/Picanha)_'))
    is_cartao_tabajara = input(
        'Voce vai pagar com o cartao Tabajara?(S/N): __')

    payment_type = "Cartao" if is_cartao_tabajara else "DInheiro"
    discount = "10%" if payment_type == "Cartao" else "Sem desconto"

    sub_total = calculateValuePerKG(qnt_meat, meat_type)
    total = calcTotal(sub_total, is_cartao_tabajara)

    print(f"""
          **** FEIRINHA *****
          Qtd.Carne ------ {qnt_meat} kg
          Tipo de Carne ------ {meat_type} Kg
          Tipo de pagamento ------ {payment_type}
          Desconto ------ {discount}
          -----
          Total: R$ {total}
          """)


def calculateValuePerKG(qnt: float, meat_type: str):
    if meat_type.lower() == 'file':
        if qnt <= 5.0:
            return qnt * 4.9
        else:
            return qnt * 5.8
    elif meat_type.lower() == 'alcatra':
        if qnt <= 5.0:
            return qnt * 5.9
        else:
            return qnt * 6.8
    elif meat_type.lower() == 'picanha':
        if qnt <= 5.0:
            return qnt * 6.9
        else:
            return qnt * 7.8
    else:
        return 0.0


def calcTotal(sub_total, is_card_purchase):
    if is_card_purchase.lower() == "s":
        print("\n...aplicando desconto de 5% \n")
        return floor(sub_total - (sub_total * 0.1))
    else:
        return sub_total


main()
