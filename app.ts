import { NewTypeAccount } from './class/NewTypeAccount';
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount = new PeopleAccount(10, 'Mickael Luiz', 1010)
peopleAccount.deposit(20)
peopleAccount.withdraw(10)
console.log('Nome da conta: ', peopleAccount.getName());
console.log('Numero da conta: ', peopleAccount.getAccountNumber());
console.log('Saldo final: ', peopleAccount.getBalance());

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

const companyAccount = new CompanyAccount('DIOSoftware', 2020)
companyAccount.deposit(30)
companyAccount.withdraw(35)
companyAccount.getLoan(30)
companyAccount.withdraw(35)
console.log('Nome da conta: ', companyAccount.getName());
console.log('Numero da conta: ', companyAccount.getAccountNumber());
console.log('Saldo Final: ', companyAccount.getBalance());

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

const newTypeAccount = new NewTypeAccount('Novo Tipo', 9999)
newTypeAccount.deposit(40)
newTypeAccount.withdraw(15)
console.log('Nome da conta: ', newTypeAccount.getName());
console.log('Numero da conta: ', newTypeAccount.getAccountNumber());
console.log('Saldo final: ', newTypeAccount.getBalance());