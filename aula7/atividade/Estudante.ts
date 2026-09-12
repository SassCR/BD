import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa {
    public RA: number;
    constructor(nome: string, cpf: number, idade: number, email: string, telefone: number, RA: number) {
        super(nome, cpf, idade, email, telefone);
        this.RA = RA
    }
    consultarLivro(nomeLivro: string): string {
        const disponivel = `O livro "${nomeLivro}" está disponível na biblioteca do campus`;
        const indisponivel = `O livro "${nomeLivro}" está indisponível na biblioteca do campus`;
        const frases = [disponivel, indisponivel];
        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        return frases[indiceAleatorio];
    }
}