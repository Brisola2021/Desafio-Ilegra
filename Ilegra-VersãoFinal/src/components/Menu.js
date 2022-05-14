import '../css/Menu.css';
import '../css/Rodape.css';
import Rodape from './Rodape';

const Menu = ()=> {
    return(
    
    <nav class="main-nav">
    <input type="checkbox" id="check" />
    <label for="check" class="menu-btn">
      <i class="fas fa-bars"></i>
    </label>
    
    <a href="https://ilegra.com/" class="logo">Desafio-Ilegra</a>
    <ul class="navlinks">
    
      <li><a href="/CadastroCurriculo">Cadastrar Curriculo</a></li>
      <li><a href="/VisualizarCurriculo">Visualizar Curriculo</a></li>
      <li><a href="/" class="contact">Home</a></li>
    </ul>
    <Rodape/>
  </nav>
  )
}
export default Menu;
