import macImg from '../../images/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg';
import { Container, Top, Content, Main, Cards } from './styles';
import { Header } from '../../components/Header';
import { FiArrowRight } from 'react-icons/fi';
import { GreenLine } from '../../components/GreenLine';

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
              <a href="#">Veja mais <FiArrowRight /></a>
            </div>
            <div className="col-b">
              <img src={macImg} alt="imagem de um macbook com editor de código aberto na tela" />
            </div>
          </main>
        </Content>
      </Top>

      <GreenLine />

      <Main>
        <Content>
          <main>
            <div className="col-a">
              <img src="https://s3-alpha-sig.figma.com/img/f97d/9dd8/a5cd1a722f3de6d1fe376c8a9aa42562?Expires=1667174400&Signature=NRzrE4ExVjK3WcHYPg7QZHe4MQvJvmXlctTIdiLxUNCkNCDrCKdwMDXUGyEiCCtLc-eHbgCcxGT-zc3yqClCaWUllnlwMF-yaa8SOPESjm28WdrDnkCpB6FhjGGZ2iZuL0GrVe5dT7LvXjQlIJHqh0k8rONSfQDkVwib6Whm0lupbgWAxp4OhzcxXXkmGm7KT~Il1ysVwZiEVjXPEvqO9ApRx6A-m9jQvWjEgir6gw04gimi3kKXj-oFCMQ5rIZwaBlPNp4q4lrGfA3STkBdJeHrXcZ-0FUNtgLlthWa0gkV~ZxDvuMc~famFHTH3bSD8BekB2E7-sV4wYSJOpwlAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="imagem de um notebook macbook" />
              <span>04 de janeiro de 2023</span>
              <h3>Começando no ReactJS em 2023</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, 
                quibusdam modi ex ab qui nihil, ducimus ipsam id alias nesciunt 
                aliquam hic. Sit fuga vero distinctio, laudantium culpa rerum hic!
              </p>
            </div>
            <div className="col-b">
              <div>
                <span>04 de janeiro de 2023</span>
                <h3>Conheça as principais técnicas para conseguir uma vaga internacional em programação</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, 
                  quibusdam modi ex ab qui nihil, ducimus ipsam id alias nesciunt 
                  aliquam hic. Sit fuga vero distinctio, laudantium culpa rerum hic!
                </p>
              </div>
              <div>
                <span>04 de janeiro de 2023</span>
                <h3>Veja a evolução do Front-end na prática</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, 
                  quibusdam modi ex ab qui nihil, ducimus ipsam id alias nesciunt 
                  aliquam hic. Sit fuga vero distinctio, laudantium culpa rerum hic!
                </p>
              </div>
            </div>
          </main>

          <Cards>
            
          </Cards>
        </Content>
      </Main>
    </Container>
  )
}