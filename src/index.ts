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
      tbody!:HTMLTableElement
      

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
        this.tbody=<HTMLTableElement>document.getElementById("tbody")
    }
     
    inserir():void{
       this.botaoContato.addEventListener("click",()=>{        
       this.controlador.inserir();
       console.log("Teste");
       })
    }

    vizualizarContatos():void{
        this.botaoVizualizarContatos.addEventListener("click",()=>{
            let contatos:Contato[]=this.controlador.selecionarTodos();
            let html:string="";
            html+=`
            <thead >
            <tr>
              <th scope="col">N.</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>               
            </tr>
             </thead>
            `
       contatos.forEach(element => {
             html+= `
            
           <tbody >
             <tr>
               <td>${element.id}</td>
               <td>${element.Nome}</td>
               <td>${element.Email}</td>
               <td>${element.Telefone}</td>
               
             </tr>                          
           </tbody>
               `
            });
            this.tbody.innerHTML=html;
        })
       
    }
       
}

 new index();