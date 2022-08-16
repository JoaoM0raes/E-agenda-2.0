import { Contato } from "../../Dominio/ModuloContato/Contato.js";
export class telaContato {
    constructor() {
        this.configurarElementos();
    }
    configurarElementos() {
        this.contatoNome = document.getElementById("contatoNome");
        this.contatoEmail = document.getElementById("contatoEmail");
        this.contatoTelefone = document.getElementById("contatoTelefone");
    }
    gerarContato() {
        let nome = this.contatoNome.value;
        let email = this.contatoEmail.value;
        let telefone = parseFloat(this.contatoTelefone.value);
        ;
        this.contato = new Contato(nome, telefone, email);
        return this.contato;
    }
}
