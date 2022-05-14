import React, { useState } from "react"; //localstorage

import '../css/cadastroCurriculo.css';


<link rel="stylesheet" href="sweetalert2/dist/sweetalert2.min.css"></link>


const CadastroCurriculo = () => {
    const [nome, setnome] = useState("")
    const [idade, setidade] = useState("")
    const [endereco, setendereco] = useState("")
    const [nascimento, setnascimento] = useState("")
    const [telefone, settelefone] = useState("")
    const [email, setemail] = useState("")
    const [expAcademica, setexpAcademica] = useState("")
    const [expProfissional, setexpProfissional] = useState("")
    const [idioma, setidioma] = useState("")
    const [outro, setoutro] = useState("")

   
   


    //JSON vazio
    var curriculo = {}

    //Comando para não zerar a contagem de ids do cadastro após atualizar página. Gera um ID para o localstorage
    var num = Math.random();
  
    //Obtendo as informações e transformando em JSON
    const HandleSubmit = (e) => {
        e.preventDefault()
        num += 1;
        curriculo = { nome: nome, idade: idade, endereco: endereco, nascimento: nascimento, telefone: telefone, email: email, expAcademica: expAcademica, expProfissional: expProfissional, idioma: idioma, outro: outro }
        localStorage.setItem(num, JSON.stringify(curriculo));
        var retorno = localStorage.getItem(num);
        console.log(JSON.parse(retorno));
        alert('Cadastro realizado com Sucesso!!');

        //Aqui estou zerando os campos
        setnome('');
        setidade('');
        setendereco('');
        setnascimento('');
        settelefone('');
        setemail('');
        setexpAcademica('');
        setexpProfissional('');
        setidioma('');
        setoutro('');
    }

//Aqui são os campos
        return (
            

                       
            <div>
             
           
            
            <form onSubmit={HandleSubmit}>
           
            <label><h2>Cadastre seu Curriculo</h2></label>

                <label className="nome"> Nome:</label>
                
               
                <input type="text" value={nome || " "} onChange={(e) => setnome(e.target.value)} /> 
                
                

                <div>
                <label className="Idade"> Idade:</label>
                <input type="text" value={idade || " "} onChange={(e) => setidade(e.target.value)} />
                
                </div>

                <div>
                <label> Endereço:</label>
                <input type="text" value={endereco || " "} onChange={(e) => setendereco(e.target.value)} />
                </div>

                <div>
                <label> Data de Nascimento:</label>
                <input type="text" value={nascimento || " "} onChange={(e) => setnascimento(e.target.value)} />
                </div>

                <div>
                <label> Telefone:</label>
                <input type="text" value={telefone || " "} onChange={(e) => settelefone(e.target.value)} />
                </div>

                <div>
                <label> Email:</label>
                <input type="text" value={email || " "} onChange={(e) => setemail(e.target.value)} />
                </div>

                <div>
                <label> Experiência Acadêmica:</label>
                <input type="text" value={expAcademica || " "} onChange={(e) => setexpAcademica(e.target.value)} />
                </div>

                <div>
                <label> Experiência Profissional:</label>
                <input type="text" value={expProfissional || " "} onChange={(e) => setexpProfissional(e.target.value)} />
                </div>

                <div>
                <label> Idioma:</label>
                <input type="text" value={idioma || " "} onChange={(e) => setidioma(e.target.value)} />
                </div>

                <div>
                <label> Outros Cursos:</label>
                <input type="text" value={outro || " "} onChange={(e) => setoutro(e.target.value)} />
                </div>

           {/*/Aqui é o botão de enviar*/}

     
                               
                <div class="btn-groups">
                <button id="criar" onclick="exibealert()" type='Submit' value='criar'>Criar Curriculo</button>

               
            

         

                           
              
    
                
                </div>

             
            </form>
            
            
           


        </div>
    )

    
          
    
          
    

}



export default CadastroCurriculo;