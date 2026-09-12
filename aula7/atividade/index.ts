import { Pessoa } from "./Pessoa";
import { Estudante } from "./Estudante";

const pessoa1 = new Pessoa("Rene", 12312312354, 21, "silva@gmail.com", 67998223590);
pessoa1.saudacao()
pessoa1.informacao()

const estudante1 = new Estudante("Maria", 98765432100, 19, "maria@gmail.com", 67999998888, 202601);
console.log(estudante1.consultarLivro("Como vende o hector para o mexico"));