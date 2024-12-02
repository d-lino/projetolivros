import LivroProtagonista from '../../assets/LivroProtagonista.png';
import livroBanana from '../../assets/livroBanana.png';
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
        <img src={livroBanana} alt="Imagem do livro Diário de um banana"/>
        <h3>Diário de um banana</h3>
          <p>Jeff Kinney</p> 
          <p>Comédia</p> 
        </section>

      </section>
    </section>
  );
}

