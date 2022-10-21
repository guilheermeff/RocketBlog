import  { Container, Nav } from './styles';

import logo from '../../assets/logo.svg';
import { Input } from '../Input';
import { FiSearch } from 'react-icons/fi';

export function Header() {
  return(
    <Container>

      <img src={logo} alt="imagem da logomarca" />

      <Nav>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Categorias</li>
          <li>Contato</li>
        </ul>
      </Nav>

      <Input 
        icon={FiSearch}
      />
    </Container>
  )
}