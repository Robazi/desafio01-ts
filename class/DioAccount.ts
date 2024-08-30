export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber(): number {
    return this.accountNumber
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Valor depositado: ', this.balance);
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance >= value) {
      this.balance -= value
      console.log('Valor retidaro: ', value);
    }else if(this.validateStatus() && this.balance < value) {
      console.log('Tentativa de saque negada - Saldo insuficiente');
    }
  }

  protected makeLoan = (value: number) => {
    if(this.validateStatus()) {
      this.balance += value
      console.log('Emprestimo realizado - Valor: ', value);
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}