export class RepositorioContatoLocasStorage {
    constructor() {
        this.localStorage = window.localStorage;
        this.contatos = this.selecionarTodos();
    }
    gravar() {
        const contatosJson = JSON.stringify(this.contatos);
        this.localStorage.setItem("contatos", contatosJson);
    }
    inserir(registro) {
        this.contatos.push(registro);
        this.gravar();
    }
    editar(registro) {
        throw new Error("Method not implemented.");
    }
    excluir(registro) {
        throw new Error("Method not implemented.");
    }
    selecionarId(registro) {
        throw new Error("Method not implemented.");
    }
    selecionarTodos() {
        const dados = this.localStorage.getItem("contatos");
        if (!dados)
            return [];
        return JSON.parse(dados);
    }
}
