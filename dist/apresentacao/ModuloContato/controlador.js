import { telaContato } from "./telaContato.js";
export class controladorContato {
    constructor(repositorio) {
        this.repositorioContato = repositorio;
        this.botaoVizualizarContatos = document.getElementById("mostrarContato");
        this.main = document.querySelector(".main");
        this.vizualizarContatos();
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
    vizualizarContatos() {
        this.botaoVizualizarContatos.addEventListener("click", () => {
            let contatos = this.selecionarTodos();
            let html = "";
            contatos.forEach(element => {
                html += `
            <div class="cards">
                  <h3 >
                     ${element.Nome}                
                  </h3>
                 <p>${element.Email}</p>
                 <p>${element.Telefone}</p>
                 <p class="id">${element.id}</p>
                 <div class="bottom-card" >
                     <button class="btn-card" id="btnEditar"  data-bs-toggle="modal" data-bs-target="#EditarContato"  >
                       <i  class='bx bx-edit'></i>
                     </button>
                     <button  class="btn-card" id="btnExcluir" >
                       <i class='bx bx-message-square-x' ></i>
                     </button>
                 </div>
              </div>     `;
            });
            this.main.innerHTML = html;
        });
    }
}
