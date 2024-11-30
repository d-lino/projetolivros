import frame from "../../assets/livre.png";  
import s from "../queroDoar/QueroDoar.module.scss";  
export default function QueroDoar() {
  return (
    <section className={s.queroDoar} >
      <p> Por favor, preencha o formulário com suas informações e as informações do Livro. </p>
      <form action="">
        <div>
          <img src={frame} alt="Imagem com icone de livro aberto com borda azul"/>
         <h2>Informações do Livro</h2>
        </div>
        <input type="text" placeholder="Titulo" />
        <input type="text" placeholder="Categoria" />
        <input type="text" placeholder="Autor" />
        <input type="text" placeholder="Link da Imagem" />
        <input type="submit" value="Doar" className={s.buttonDoar}/>
      </form>
    </section>
  );
}


