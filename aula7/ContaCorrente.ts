import { Conta } from './Conta';
export class ContaCorrente extends Conta {
  imprimirExtrato(): void {
   const taxaImpressao: number = 1;
   if(this.saldo < taxaImpressao) {
    console.log('Saldo insuficiente para impressão');
   }  else {
    this.saldo -= taxaImpressao;
    console.log(`Saldo atual (apos impressao de extrato): R$${this.saldo}`);
   }
  }
}