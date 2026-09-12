export class Pessoa {
    public nome: string;
    private cpf: number;
    public idade: number;
    private email: string;
    private telefone: number;

    constructor(nome: string, cpf: number, idade: number, email: string, telefone: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.email = email;
        this.telefone = telefone;
    }
    saudacao() {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

    informacao() {
        console.log(`Caso deseje entra em contato o meu telefone é: ${this.telefone} e esse o meu email:${this.email}.`);

    }

}