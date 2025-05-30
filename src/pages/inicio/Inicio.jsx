import s from '../inicio/Inicio.module.scss';
import imagem1 from '../../assets/comunidade.png';
import imagem2 from '../../assets/leitura.png';
import imagem3 from '../../assets/transformação.png';
import imagem4 from '../../assets/balança.png';

export default function Inicio() {
  return (
    <main>
    <section className={s.paginaInicial}>
      <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>

      </section>
            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.cardsMotivos}>
                    <section>
                        <img src={imagem1} alt="Imagem ilustrando círculo social de 4 pessoas" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={imagem2} alt="Imagem ilustrando pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={imagem3} alt="Imagem ilustrando 6 pessoas transformando vidas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={imagem4} alt="Imagem ilustrando balança representando igualdade" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
    </section>
    </main>
  );
}
