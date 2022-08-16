import { EntidadeBase } from "../../Compartilhado/entidade.model.js";
export class Contato extends EntidadeBase {
    constructor(Nome, telefone, Email) {
        super();
        this.Nome = Nome;
        this.Telefone = telefone;
        this.Email = Email;
    }
}
