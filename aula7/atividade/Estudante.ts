import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa {
    public RA: number;
    constructor(nome: string, cpf: number, idade: number, email: string, telefone: number, RA: number) {
        super(nome, cpf, idade, email, telefone);
        this.RA = RA
    }
    consultarLivro() {
        const disponivel = "Livro disponível na biblioteca do campus";
        const indisponivel = "Livro indisponível na biblioteca do campus"; 
        if(Math.random())
    }
}