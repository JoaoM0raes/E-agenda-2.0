import { Irepositorio } from "../../Compartilhado/repositorio.interface.js";
import { Contato } from "../../Dominio/ModuloContato/Contato.js";
import { RepositorioContatoLocasStorage } from "../../Infra/ModuloContato/contato.repositorio.js";
import { telaContato } from "./telaContato.js";


export class controladorContato {
    
    telaContato!:telaContato
    repositorioContato:Irepositorio<Contato>

    constructor(repositorio:Irepositorio<Contato>){
      
      this.repositorioContato=repositorio;      
    }

    inserir():void{  
        this.telaContato=new telaContato();
     let contato:Contato =this.telaContato.gerarContato();
     this.repositorioContato.inserir(contato);
    }
    editar():void{

    }
    excluir():void{

    }
    selecionarTodos():Contato[]{
     return this.repositorioContato.selecionarTodos();
    }
}