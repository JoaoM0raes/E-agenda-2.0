import { Contato } from "../../Dominio/ModuloContato/Contato.js";
import { RepositorioContatoLocasStorage } from "../../Infra/ModuloContato/contato.repositorio.js";
export class telaContato {
    constructor(repositorio, id) {
        this.repositorio = repositorio;
        this.configurarElementos();
        this.gerarContato();
        if (id) {
            this.idSelicionado = id;
            const tarefaSelecionada = this.repositorio.selecionarId(id);
            if (tarefaSelecionada) {
                this.preencherFormulario(tarefaSelecionada);
            }
        }
    }
    configurarElementos() {
        this.botaoContato = document.getElementById("btnContato");
        this.contatoNome = document.getElementById("contatoNome");
        this.contatoEmail = document.getElementById("contatoEmail");
        this.contatoTelefone = document.getElementById("contatoTelefone");
    }
    gerarContato() {
        this.botaoContato.addEventListener("click", () => {
            let contato = this.pegarDados();
            if (this.idSelicionado) {
                contato.id = this.idSelicionado;
                this.repositorio.editar(contato);
            }
            else {
                this.repositorio.inserir(contato);
            }
        });
    }
    pegarDados() {
        let nome = this.contatoNome.value;
        let email = this.contatoEmail.value;
        let telefone = parseFloat(this.contatoTelefone.value);
        ;
        return this.contato = new Contato(nome, telefone, email);
    }
    preencherFormulario(contato) {
        this.contatoNome.value = contato.Nome;
        this.contatoEmail.value = contato.Email;
        this.contatoTelefone.value = contato.Telefone.toString();
    }
}
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
new telaContato(new RepositorioContatoLocasStorage(), id);
