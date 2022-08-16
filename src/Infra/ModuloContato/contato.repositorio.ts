import { Irepositorio } from "../../Compartilhado/repositorio.interface.js";
import { IrepositorioSerializavel } from "../../Compartilhado/repositorio.interface.Serializavel.js";
import { Contato } from "../../Dominio/ModuloContato/Contato.js";

export class RepositorioContatoLocasStorage implements Irepositorio<Contato>, IrepositorioSerializavel{

    private readonly localStorage:Storage

    private readonly contatos: Contato[];

    constructor(){
        this.localStorage= window.localStorage
        this.contatos = this.selecionarTodos();
    }
    gravar(): void {
        const contatosJson = JSON.stringify(this.contatos);

        this.localStorage.setItem("contatos",contatosJson)
    }


    inserir(registro: Contato): void {
        this.contatos.push(registro);
        this.gravar();
    }
    editar(registro: Contato): void {
        throw new Error("Method not implemented.");
    }
    excluir(registro: Contato): void {
        throw new Error("Method not implemented.");
    }
    selecionarId(registro: Contato): Contato {
        throw new Error("Method not implemented.");
    }
    selecionarTodos(): Contato[] {
        const dados = this.localStorage.getItem("contatos")

        if(!dados)
        return []

        return JSON.parse(dados); 
    }

}