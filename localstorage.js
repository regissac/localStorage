var i=1;
    //var contato="contato "+i;
    var cont;
    //adicionando no localStorage
    function add(){
        var nome = document.querySelector("#nome").value;
        var tel = document.querySelector("#tel").value;
        var email = document.querySelector("#email").value;
        localStorage.setItem("contato"+i,Array=["Nome: "+nome,"Tel: "+tel,"E-mail: "+email]);//automaticamente insere 
    //no localStorage do navegador
        
        clear();
        var resultado = localStorage.getItem("contato"+i);
        document.querySelector("#resultado").innerHTML=resultado;

        i++;
    }

    //removendo do localStorage
    function remove(){       
        var index=1;
        var resposta = confirm('Deseja excluir?');//aqui a opçao escolhida é atribuido a variavel resposta.
        if (resposta == true){//comparaçao da resposta do confirm.
           
                while (index<10000) {  //enquanto o index for menor que 10000, fara a remoçao dos items no localStorage;                
                   localStorage.removeItem("contato"+index);//automaticamente remove no localStorage do navegador    
                   index++;                
                }
        
        }   
    }
    //limpando os campos(input)
    function clear(){
        document.querySelector("#nome").value="";
        document.querySelector("#tel").value="";
        document.querySelector("#email").value="";
    }