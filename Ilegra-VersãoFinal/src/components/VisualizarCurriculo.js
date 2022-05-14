import '../css/VisualizarCurriculo.css';

const VisualizarCurriculo = () => {
    
    var keyToJson = []
    var itemsToJson = [];

    const apagar = (chave) => {
        localStorage.removeItem(chave);
        alert('Cadastro deletado!!');
        location.reload();
    }

//Aqui é a listagem onde recupero os dados das chaves dos valores
    for (var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        console.log(key + " => " + value);

        itemsToJson.push(JSON.parse(value));
        keyToJson.push(JSON.parse(key));
    }

    console.log(itemsToJson)
    return (
    


        

        

            <div id="Lista">


                
{/*Aqui são os valores dos campos que pertencem ao cadastro do CV */}
                {
                    itemsToJson.map((value, key) =>
                        <div>
                            <p>Nome:{value.nome}</p>
                            <p>Idade:{value.idade}</p>
                            <p>Endereço:{value.endereco}</p>
                            <p>Nascimento:{value.nascimento}</p>
                            <p>Telefone:{value.telefone}</p>
                            <p>Email:{value.email}</p>
                            <p>Experiência Acadêmica:{value.expAcademica}</p>
                            <p>Experiência Profissional:{value.expProfissional}</p>
                            <p>Idioma:{value.idioma}</p>
                            <p>Outros Cursos:{value.outro}</p>

                            {/*Botão deletar está recuperando ID da posição do item permitindo apagar*/ }
                            <button id="apagar" onClick={() => apagar(keyToJson[key])}>deletar</button>

                            

                            {/*Aqui estou passando a chave como parâmetro para recuperar os dados em outra página */}
                            <a href={`/Curriculo/${keyToJson[key]}`}>Visualizar Curriculo</a>
                           
                            <hr />
                        </div>
                    )
                }

            </div>

        




    )


}

export default VisualizarCurriculo;