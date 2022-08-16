import { controladorContato } from "./apresentacao/ModuloContato/controlador.js";
import { RepositorioContatoLocasStorage } from "./Infra/ModuloContato/contato.repositorio.js";
class index {
    constructor() {
        this.configurarElementos();
        this.inserir();
        this.vizualizarContatos();
    }
    configurarElementos() {
        this.botaoContato = document.getElementById("btnContato");
        this.botaoVizualizarContatos = document.getElementById("mostrarContato");
        this.repositorioContato = new RepositorioContatoLocasStorage();
        this.controlador = new controladorContato(this.repositorioContato);
        this.main = document.querySelector(".main");
    }
    inserir() {
        this.botaoContato.addEventListener("click", () => {
            this.controlador.inserir();
            this.vizualizarContatos();
        });
    }
    vizualizarContatos() {
        this.botaoVizualizarContatos.addEventListener("click", () => {
            let contatos = this.controlador.selecionarTodos();
            let html = "";
            contatos.forEach(element => {
                html += `
            <div class="cards">
                  <h3>
                     ${element.Nome}                
                  </h3>
                 <p>${element.Email}</p>
                 <p>${element.Telefone}</p>
                 <div class="bottom-card">
                     <button class="btn-card" id="btnEditar">
                       <i class='bx bx-edit'></i>
                     </button>
                     <button  class="btn-card" id="btnExcluir">
                       <i class='bx bx-message-square-x' ></i>
                     </button>
                 </div>
              </div>     `;
            });
            this.main.innerHTML = html;
        });
    }
}
new index();
