def main():
    hours_rate = float(input("Por favor, informe o valor pela sua hora: R$_"))
    hours_per_month = float(input("Quantas horas por mês você trabalhou:_"))
    salary = hours_rate * hours_per_month

    # Descontos
    income_tax = set_income_tax(salary) 
    income_tax_value = calc_tax(salary, income_tax)
    inss_tax = calc_tax(salary, 0.1)
    fgts_tax = calc_tax(salary, 0.11)

    # Total de descontos
    total_outcome = inss_tax + income_tax

    # Salario liquido
    income = salary - total_outcome

    print(
        f"""
    =========== INFORMES DE SALARIO ===========
    Salário Bruto: ({hours_rate} * {hours_per_month}) : R$ {salary}
        (-) IR (5%) : R$ {income_tax_value}
        (-) INSS ( 10%) : R$ {inss_tax}
    FGTS (11%) : R$ {fgts_tax}
        Total de descontos : R$ {total_outcome}
    Salário Liquido : R$ {income}
    ============================================
    """)


def set_income_tax(salary: float) -> float:
    if salary <= 1_500.00:
        return 0.05
    if salary > 1_500.00 and salary <= 2_500.00:
        return 0.1
    if salary >= 2_500.00:
        return 0.2


def calc_tax(salary, tax_rate):
    return salary * tax_rate


print(main())
