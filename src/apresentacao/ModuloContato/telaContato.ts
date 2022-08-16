import { IpaginaHtml } from "../../Compartilhado/pagina.Interface.js";
import { Contato } from "../../Dominio/ModuloContato/Contato.js";

export class telaContato implements IpaginaHtml{
    
     contato!:Contato;

     contatoNome!:HTMLInputElement;
     contatoEmail!:HTMLInputElement;
     contatoTelefone!:HTMLInputElement;

   constructor(){
    this.configurarElementos();
   }

    configurarElementos(): void {

       this.contatoNome=<HTMLInputElement>document.getElementById("contatoNome");
       this.contatoEmail=<HTMLInputElement>document.getElementById("contatoEmail");
       this.contatoTelefone=<HTMLInputElement>document.getElementById("contatoTelefone");     

    }


    gerarContato():Contato{
 
        let nome:string=this.contatoNome.value; 
        let email:string=this.contatoEmail.value;
        let telefone:number =parseFloat(this.contatoTelefone.value);; 

        this.contato=new Contato(nome,telefone,email);

        return this.contato; 
    }

}