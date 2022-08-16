import { EntidadeBase } from "../../Compartilhado/entidade.model.js"

export class Contato extends EntidadeBase{    
    Nome:string
    Telefone:number
    Email:string

    constructor(Nome:string,telefone:number,Email:string) {
        super();
        this.Nome=Nome
        this.Telefone=telefone
        this.Email=Email
    }
}