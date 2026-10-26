document.getElementById ("novocalculo").style.display = "none";

function calcularMedia(){

     //Pegando os valores digitados pelo usuário
     let nome = document.getElementById("nome").value; 
     let disciplina = document.getElementById("disciplina").value; 

     //Pegando os valores digitados pelo usuário convertendo para número
     let nota1 = Number(document.getElementById("nota1").value);
     let nota2 = Number(document.getElementById("nota2").value);
     let nota3 = Number(document.getElementById("nota3").value);
     let nota4 = Number(document.getElementById("nota4").value);

   if ( nome == ""||disciplina == ""|| nota1 == "" || 
    nota2 == "" || nota3 == "" || nota4 == "" )
    { alert("Preencha todos os campos!")}
    
   else{
        //Operações Matemáticas
        let soma = nota1 + nota2 + nota3 + nota4;
        let media = soma / 4;

        //verificar situação do aluno
        let situacao; //classificar se ele foi aprovado, reprovado ou está em recuperação
        let classeSituacao; //estilizar a cor (CSS)

        if(media >=7){
            situacao= "APROVADO";
            classeSituacao = "aprovado";
        }

        else if(media >= 5){
            situacao= " RECUPERAÇÃO";
            classeSituacao = "recuperacao";
        }

         else{
            situacao= "REPROVADO";
            classeSituacao = "reprovado";
        }

        //exibir o resultado
        let resultado = document.getElementById("resultado");

        resultado.innerHTML =  
        "Aluno: " + nome + "<br><br>" +
        "Disciplina: " + disciplina + "<br><br>" +
        "Média: " + media + "<br><br>" +
        "Situação; <span class= '" + classeSituacao + "'>" + situacao + "</span>";

        document.getElementById ("novocalculo").style.display = "block";
        document.getElementById ("calcular").style.display = "none";
   }

   }

  function calcularNovo(){
    //resetando os valores
    let nome = document.getElementById("nome").value = ""; 
    let disciplina = document.getElementById("disciplina").value = ""; 

     let nota1 = Number(document.getElementById("nota1").value = "");
     let nota2 = Number(document.getElementById("nota2").value = "");
     let nota3 = Number(document.getElementById("nota3").value = "");
     let nota4 = Number(document.getElementById("nota4").value = "");

     let resultado = document.getElementById("resultado")
     .textContent = "Preencha os dados acima e clique em Calcular Média";

      document.getElementById ("novocalculo").style.display = "none"; 
      document.getElementById ("calcular").style.display = "block";  

}
     