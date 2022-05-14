import '../css/Curriculo.css';
import { useParams } from "react-router-dom";


//Aqui estou recuperando os parâmetros e mostrando na tela
const Curriculo = () => {
    let { id } = useParams();


  var itemToJson=JSON.parse(localStorage.getItem(id));
console.log(itemToJson);

    return (


        <div id='dados'>
            <p>Nome: {itemToJson.nome}</p>
            <p>Idade: {itemToJson.idade}</p>
            <p>Endereço: {itemToJson.endereco}</p>
            <p>Nascimento: {itemToJson.nascimento}</p>
            <p>Telefone: {itemToJson.telefone}</p>
            <p>Email: {itemToJson.email}</p>
            <p>Experiência Academica: {itemToJson.expAcademica}</p>
            <p>Experiência Profissional: {itemToJson.expProfissional}</p>
            <p>Idioma: {itemToJson.idioma}</p>
            <p>Outros Cursos: {itemToJson.outro}</p>
        </div>

    )

}


export default Curriculo;