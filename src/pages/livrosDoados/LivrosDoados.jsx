import LivroProtagonista from '../../assets/LivroProtagonista.png';
import livroBanana from '../../assets/livroBanana.jpg';
import livroPilgrim from '../../assets/livroPilgrim.jpg';
import s from '../livrosDoados/LivrosDoados.module.scss';
export default function LivrosDoados() {
  return (
      <section className={s.LivrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section className={s.containerCards}>
        <section> 
          <img src={LivroProtagonista} alt="Imagem do livro Lider Protagonista"/>
          <h3>Lider protagonista</h3>
          <p>Susanne Andrade</p> 
          <p>Ficção</p> 
        </section>

        <section>
        <img src={livroPilgrim} alt="Imagem do livro Scott Pilgrim"/>
        <h3>Scott Pilgrim Contra o Mundo</h3>
        <h5>Volume 3</h5>
          <p>Bryan Lee O'malley</p> 
          <p>Ação</p> 
        </section>

        <section>
        <img src={livroBanana} alt="Imagem do livro Diário de um banana"/>
        <h3>Diário de um banana</h3>
        <h5>Volume 1</h5>
          <p>Jeff Kinney</p> 
          <p>Comédia</p> 
        </section>

      </section>
    </section>
  );
}

