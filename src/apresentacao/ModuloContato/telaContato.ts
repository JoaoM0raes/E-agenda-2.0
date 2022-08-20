import { IpaginaHtml } from "../../Compartilhado/pagina.Interface.js";
import { Irepositorio } from "../../Compartilhado/repositorio.interface.js";
import { Contato } from "../../Dominio/ModuloContato/Contato.js";
import { RepositorioContatoLocasStorage } from "../../Infra/ModuloContato/contato.repositorio.js";


export class telaContato implements IpaginaHtml{
    
     private contato!:Contato;
     private botaoContato!:HTMLButtonElement
     private contatoNome!:HTMLInputElement;
     private contatoEmail!:HTMLInputElement;
     private contatoTelefone!:HTMLInputElement;
     private repositorio!:Irepositorio<Contato>   
     private adicionarContato!:HTMLButtonElement     
     private telaContato!:telaContato
     private idSelicionado!:string

   constructor(repositorio:Irepositorio<Contato>, id?:string){
    this.repositorio=repositorio;
    this.configurarElementos();
    this.gerarContato();

    if(id){
       this.idSelicionado=id;

       const tarefaSelecionada =this.repositorio.selecionarId(id);       

       if(tarefaSelecionada){
          this.preencherFormulario(tarefaSelecionada);
       }
    }
   }

    configurarElementos(): void {
       this.botaoContato=<HTMLButtonElement>document.getElementById("btnContato");    
       this.contatoNome=<HTMLInputElement>document.getElementById("contatoNome");
       this.contatoEmail=<HTMLInputElement>document.getElementById("contatoEmail");
       this.contatoTelefone=<HTMLInputElement>document.getElementById("contatoTelefone");     
    }

    gerarContato():void{
         
        this.botaoContato.addEventListener("click",()=>{

             let contato = this.pegarDados()
              
             if(this.idSelicionado){
                contato.id=this.idSelicionado
                this.repositorio.editar(contato)
             }
             else
             {
                this.repositorio.inserir(contato);
             }
        })      
    }
    pegarDados():Contato{
        let nome:string=this.contatoNome.value; 
        let email:string=this.contatoEmail.value;
        let telefone:number =parseFloat(this.contatoTelefone.value);; 

        return this.contato=new Contato(nome,telefone,email);
    }
    preencherFormulario(contato:Contato){
        this.contatoNome.value=contato.Nome
        this.contatoEmail.value=contato.Email
        this.contatoTelefone.value=contato.Telefone.toString();        
    }
}
const params= new URLSearchParams(window.location.search)

const id= params.get("id") as string;

new telaContato(new RepositorioContatoLocasStorage(),id)
