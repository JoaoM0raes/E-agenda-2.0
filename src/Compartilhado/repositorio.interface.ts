import { EntidadeBase } from "./entidade.model.js";

export interface Irepositorio<T extends EntidadeBase>{

    inserir(registro :T):void;
    editar(registro:T):void; 
    excluir(id:string | null):void;
    selecionarId(id:string):T | undefined; 
    selecionarTodos():T[]; 

}