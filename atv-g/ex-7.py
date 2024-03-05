def main():
    salary = float(input("Por favor, informe o seu salario: _"))
    adjustment_percent = 0
    adjustment_value = 0
    new_salary = 0

    if salary <= 280.0:
        adjustment_percent = 0.2
        adjustment_value = salary * adjustment_percent
        new_salary = adjustment_value + salary

    elif salary in range(280, 700):
        adjustment_percent = 0.15
        adjustment_value = salary * adjustment_percent
        new_salary = adjustment_value + salary

    elif salary in range(700, 1500):
        adjustment_percent = 0.1
        adjustment_value = salary * adjustment_percent
        new_salary = adjustment_value + salary

    elif salary >= 1500:
        adjustment_percent = 0.05
        adjustment_value = salary * adjustment_percent
        new_salary = adjustment_value + salary



    print(
        f"""
    =========== INFORMES DE SALARIO ===========
      salário antes do reajuste: {salary}
      percentual de aumento aplicado: {adjustment_percent}
      valor do aumento: {adjustment_value}
      novo salário, após o aumento: {new_salary}
    ============================================
    """)


print(main())
