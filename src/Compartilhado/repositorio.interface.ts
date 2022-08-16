import { EntidadeBase } from "./entidade.model.js";

export interface Irepositorio<T extends EntidadeBase>{

    inserir(registro :T):void;
    editar(registro: T):void; 
    excluir(registro:T):void;
    selecionarId(registro:T):T; 
    selecionarTodos():T[]; 

}