import { IpaginaHtml } from "../../Compartilhado/pagina.Interface.js";
import { Irepositorio } from "../../Compartilhado/repositorio.interface.js";
import { Contato } from "../../Dominio/ModuloContato/Contato.js";
import { RepositorioContatoLocasStorage } from "../../Infra/ModuloContato/contato.repositorio.js";

export class contatolist implements IpaginaHtml {


    mostrarContato!:HTMLButtonElement
    repositorioContato!:Irepositorio<Contato>
    main!:HTMLElement 

    constructor(){
       this.configurarElementos();
       this.mostrarContatos();
       
    }

    configurarElementos(): void {
        this.repositorioContato=new RepositorioContatoLocasStorage();       
        this.mostrarContato=<HTMLButtonElement>document.getElementById("mostrarContato");
        this.main=<HTMLElement>document.querySelector(".main");           
    }
     
    mostrarContatos():void{
        this.mostrarContato.addEventListener("click",()=>{
            
                 this.atualizarHtml();                        
                this.Editarbtn();
                this.Excluirbtn();
        })
    }
    Editarbtn(){     
     
      const cards= document.querySelectorAll(".cards")

      cards.forEach(card=>{
         card as HTMLDialogElement
         const btn =card.querySelectorAll(".btn-editar")
         btn.forEach(Element=>{
          Element.addEventListener("click",()=>{     
            const id=card.querySelector("#id-card");
            window.location.href=`AdicionarContato.html?id=${id!.textContent}`
         })
        })
      })
    }
    Excluirbtn(){
      const cards= document.querySelectorAll(".cards")

      cards.forEach(card=>{
         card as HTMLDialogElement
         const btn =card.querySelectorAll(".btn-excluir")
         btn.forEach(Element=>{
          Element.addEventListener("click",()=>{    
            const id=card.querySelector("#id-card"); 
            if(id){
              this.repositorioContato.excluir(id.textContent);
              this.atualizarHtml();
            } 
         })
        })
      })
    }
    atualizarHtml(){
      let contatos:Contato[]=this.repositorioContato.selecionarTodos();
      let html:string="";
      contatos.forEach(element => {
            html+=`
      <div class="cards">
            <h3 >
               ${element.Nome}                
            </h3>
           <p>${element.Email}</p>
           <p>${element.Telefone}</p>
           <p id="id-card" class="id">${element.id}</p>
           <div class="bottom-card" >
               <button class="btn-card btn-editar" id="btnEditar"  data-bs-toggle="modal" data-bs-target="#EditarContato"  >
                 <i  class='bx bx-edit'></i>
               </button>
               <button  class="btn-card btn-excluir" id="btnExcluir" >
                 <i class='bx bx-message-square-x' ></i>
               </button>
           </div>
        </div>`
                                
      });
      this.main.innerHTML=html;     
    }
    

  
}
 new contatolist()