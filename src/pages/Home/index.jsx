import macImg from '../../images/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg';
import { Container, Top, Content, Main, Cards } from './styles';
import { GreenLine } from '../../components/GreenLine';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { FiArrowRight } from 'react-icons/fi';

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
            <Card 
              src={"https://s3-alpha-sig.figma.com/img/d1c4/8338/771f9c80ea3b80575542cfcacbb04a33?Expires=1667174400&Signature=CRONQ-o744HNg500iwBMlpbPiKzF1LETPR2s-QAEshGYQ~ReMBt0mQ11cXhBI34h8bOy4aXTgjlrs3cwMQB82BnRtB4vYxck7nV6eea6gieyq1~ydqbWRJp-gNT2hIDVJq6qLGKSGJOLC-JR8gtJXzsW73xeJ1-ZB71BG7o4k0cdd8-btM9sTZswXIsHcWE2yDaavH28W1~YbVNmw2KIzqXOgBhXkmoqyaodNeVwPYpzDDsJrYUbDk0aVNrYMxlO7A7Am5PRwiqkX8d8gVB-6KOGq6SOTXrVle8UwuLP6rdyFkWGTRjNHZqivLF1c4hmaH00--L7NnemlSvTjjLS~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}
            />
            <Card 
              src={"https://s3-alpha-sig.figma.com/img/7898/db51/594563a13a758b9f30600cd6c34d0480?Expires=1667174400&Signature=Kk8Q2suoerns2~xgT9hDdq1zYulpClJyiM0r9pTFDCOqE4jeOC-wCyt9eBrt9wo-64ztwMLmRlzB9yqdo2U6zSGsPJiL~rY1Zl~7Kg0dx1z3RtD-5zQtwfFaTwkt-QudMEhCbyON6GnMUcmjumOdDqIy~0bN5-jdYja~52qAJ22BUoGUBButbkaXB4D6jZ5FxXUQnM53sjihb98VoBUrnkrRod2N1TaSJAofbbEugkshJj7ul9Rpy1pOEgqxIFuG5b8dwUrpWqUFezVfoksg7xMcrUS-2RRJ8U1Y8bNvmLPFeZOQ9V3kJTtv2DpUndGvq9TeqznOERXXNOqlzF3FqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}
            />
          </Cards>
        </Content>
      </Main>
    </Container>
  )
}