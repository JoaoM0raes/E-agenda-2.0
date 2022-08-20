import { Irepositorio } from "../../Compartilhado/repositorio.interface.js";
import { IrepositorioSerializavel } from "../../Compartilhado/repositorio.interface.Serializavel.js";
import { Contato } from "../../Dominio/ModuloContato/Contato.js";

export class RepositorioContatoLocasStorage implements Irepositorio<Contato>, IrepositorioSerializavel{

    private readonly localStorage:Storage

    private  contatos: Contato[];

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
       const contatoSelecionado =  this.contatos.findIndex(x=>x.id===registro.id)

       this.contatos[contatoSelecionado]=registro;   

       this.gravar();
    }
       
    excluir(id:string | null): void {
        this.contatos=this.contatos.filter(x=>x.id!==id)

        this.gravar();
    }
    selecionarId(id:string): Contato | undefined {
       return this.contatos.find(x=>x.id === id)

    }
    selecionarTodos(): Contato[] {
        const dados = this.localStorage.getItem("contatos")

        if(!dados)
        return []

        return JSON.parse(dados); 
    }

}