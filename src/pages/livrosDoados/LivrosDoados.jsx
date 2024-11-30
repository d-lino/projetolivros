import LivroProtagonista from '../../assets/LivroProtagonista.png';
import s from '../livrosDoados/LivrosDoados.module.scss';
export default function LivrosDoados() {
  return (
      <section className={s.LivrosDoadosSection}>
      <h2>Livros Doados</h2>
      <section>
        <section> 
          <img src={LivroProtagonista} alt=""/>
          <h3>O protagonista</h3>
          <p>Susanne Andrade</p> 
          <p>Ficção</p> 
        </section>
      </section>
    </section>
  );
}

