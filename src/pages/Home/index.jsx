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
            <div className="col-a">
              <h1>Veja o guia definitivo para conquistar seus objetivos como DEV em 2023</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur 
                voluptatibus reiciendis perspiciatis, similique rerum a! At cupiditate 
                sequi a voluptas sint accusantium quidem, nesciunt hic, deserunt molestiae 
                totam, magni autem.
              </p>
            </div>
            <div className="col-b">
              <img src={macImg} alt="imagem de um macbook com editor de código aberto na tela" />
            </div>
          </main>
        </Content>
      </Top>
    </Container>
  )
}