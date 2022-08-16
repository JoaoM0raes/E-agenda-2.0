import { telaContato } from "./telaContato.js";
export class controladorContato {
    constructor(repositorio) {
        this.repositorioContato = repositorio;
    }
    inserir() {
        this.telaContato = new telaContato();
        let contato = this.telaContato.gerarContato();
        this.repositorioContato.inserir(contato);
    }
    editar() {
    }
    excluir() {
    }
    selecionarTodos() {
        return this.repositorioContato.selecionarTodos();
    }
}
