def main():
    gas_price = 2.50
    alchool_price = 1.90

    lts_solds = float(input('Digite a quantidade de litros vendidos:_'))
    fuel_type = input('Digite o tipo de combustível:_')
    discount = get_discount(lts_solds, fuel_type)
    
    price_per_litter = gas_price if fuel_type == "G" else alchool_price
    price = calculate_total(lts_solds, price_per_litter)
     
    total_price = price - calculate_discount(price, discount)

    print(f'''
        _____-----Bomba de combustível_____-----
        preço por litro: {price_per_litter} - {fuel_type}
        quantidade de litros: {lts_solds}
        TOTAL a pagar: {total_price}
    ''')

def get_discount(lts, fuel_type):
    if lts <= 20 and fuel_type == "G":
        return 0.3
    elif lts <= 20 and fuel_type == "A":
        return 0.4
    elif lts > 20 and fuel_type == "G":
        return lts * 0.5
    elif lts > 20 and fuel_type == "A":
        return lts * 0.6

    

def calculate_total(lts, price):
    return lts * price

def calculate_discount(number, percent):
    return number - percent 

main()
