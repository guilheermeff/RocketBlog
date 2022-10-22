import { Container } from './styles';

export function Card({ src: Src, date, title, content }) {
  return(
    <Container>
      <img src={Src} alt="imagem do cabeçado do card." />
      <span>{date}</span>
      <h4>{title}</h4>
      <p>{content}</p>
    </Container>
  )
}