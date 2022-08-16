import { controladorContato } from "./apresentacao/ModuloContato/controlador.js";
import { telaContato } from "./apresentacao/ModuloContato/telaContato.js";
import { IpaginaHtml } from "./Compartilhado/pagina.Interface.js";
import { Irepositorio } from "./Compartilhado/repositorio.interface.js";
import { Contato } from "./Dominio/ModuloContato/Contato.js";
import { RepositorioContatoLocasStorage } from "./Infra/ModuloContato/contato.repositorio.js";

class index implements IpaginaHtml{

      botaoContato!:HTMLButtonElement
      controlador!:controladorContato
      repositorioContato!:Irepositorio<Contato>
      botaoVizualizarContatos!:HTMLButtonElement
      main!:HTMLElement
      

      constructor(){
        this.configurarElementos();
        this.inserir();
        this.vizualizarContatos();
      }

    configurarElementos(): void {
        this.botaoContato=<HTMLButtonElement>document.getElementById("btnContato");
        this.botaoVizualizarContatos=<HTMLButtonElement>document.getElementById("mostrarContato");
        this.repositorioContato=new RepositorioContatoLocasStorage();        
        this.controlador=new controladorContato(this.repositorioContato)
        this.main=<HTMLElement>document.querySelector(".main");
    }
     
    inserir():void{
       this.botaoContato.addEventListener("click",()=>{        
       this.controlador.inserir();
       this.vizualizarContatos()
       
       })
    }

    vizualizarContatos():void{
        this.botaoVizualizarContatos.addEventListener("click",()=>{
            let contatos:Contato[]=this.controlador.selecionarTodos();
            let html:string="";
            contatos.forEach(element => {
                  html+=`
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
              </div>     `   
                         
            });
            this.main.innerHTML=html;
           
        })
       
    }
       
}

 new index();