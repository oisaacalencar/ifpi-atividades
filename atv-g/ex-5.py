def main():
    first_price = float(input("Informe o preço do primeiro produto:_"))
    second_price = float(input("Informe o preço do segundo produto:_"))
    third_price = float(input("Informe o preço do terceiro produto:_"))

    product_suggestion = ''

    if first_price < second_price and first_price < third_price:
        product_suggestion = "O primeiro produto é o mais vantajoso"
    elif second_price < first_price and second_price < third_price:
        product_suggestion = "O Segundo produto é o mais vantajoso"
    elif third_price < second_price and third_price < first_price:
        product_suggestion = "O Terceiro produto é o mais vantajoso"
    elif first_price == second_price and second_price == third_price:
        product_suggestion = "Tanto faz, meu chapa"

    print(
        f"""
    ======== MELHOR PREÇO ========
        Produto 1: {first_price}
        Produto 2: {second_price}
        Produto 3: {third_price}
    -------------------------------
        Melhor escolha: {product_suggestion}
    """)

    return


print(main())
