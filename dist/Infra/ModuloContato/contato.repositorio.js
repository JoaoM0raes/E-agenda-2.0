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
        const contatoSelecionado = this.contatos.findIndex(x => x.id === registro.id);
        this.contatos[contatoSelecionado] = registro;
        this.gravar();
    }
    excluir(id) {
        this.contatos = this.contatos.filter(x => x.id !== id);
        this.gravar();
    }
    selecionarId(id) {
        return this.contatos.find(x => x.id === id);
    }
    selecionarTodos() {
        const dados = this.localStorage.getItem("contatos");
        if (!dados)
            return [];
        return JSON.parse(dados);
    }
}
