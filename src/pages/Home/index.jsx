import { Container, Top, Content } from './styles';
import { Header } from '../../components/Header';
import macImg from '../../images/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg';

export function Home() {
  return (
    <Container>
      <Top>
        <Content>
          <Header />

          <main>
            <div className="col-a"></div>
            <div className="col-b">
              <img src={macImg} alt="imagem de um macbook com editor de código aberto na tela" />
            </div>
          </main>
        </Content>
      </Top>
    </Container>
  )
}