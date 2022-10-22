import { Container } from './styles';

export function Card({ src: Src }) {
  return(
    <Container>
      <img src={Src} alt="imagem do cabeçado do card." />
      <h4></h4>
      <span></span>
      <p></p>
    </Container>
  )
}