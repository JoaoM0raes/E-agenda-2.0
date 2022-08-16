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
        this.tbody = document.getElementById("tbody");
    }
    inserir() {
        this.botaoContato.addEventListener("click", () => {
            this.controlador.inserir();
            console.log("Teste");
        });
    }
    vizualizarContatos() {
        this.botaoVizualizarContatos.addEventListener("click", () => {
            let contatos = this.controlador.selecionarTodos();
            let html = "";
            html += `
            <thead >
            <tr>
              <th scope="col">N.</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>               
            </tr>
             </thead>
            `;
            contatos.forEach(element => {
                html += `
            
           <tbody >
             <tr>
               <td>${element.id}</td>
               <td>${element.Nome}</td>
               <td>${element.Email}</td>
               <td>${element.Telefone}</td>
               
             </tr>                          
           </tbody>
               `;
            });
            this.tbody.innerHTML = html;
        });
    }
}
new index();
