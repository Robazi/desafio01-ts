import { DioAccount } from './DioAccount';

export class NewTypeAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposito = (value: number) => {
    this.deposit(value + 10)
  }
}