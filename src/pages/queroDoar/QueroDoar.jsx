import frame from "../../assets/livre.png";  
import s from "../queroDoar/QueroDoar.module.scss";  
import { useState } from "react";
import axios from "axios";

export default function QueroDoar() {
const [titulo,setTitulo]=useState("")
const [categoria,setCategoria]=useState("")
const [autor,setAutor]=useState("")
const [image_url,setImage_url]=useState("")

const capturaTitulo=(e)=>{
setTitulo(e.target.value)
}

const capturaCategoria=(e)=>{
  setCategoria(e.target.value)
}

const capturaAutor=(e)=>{
  setAutor(e.target.value)
}

const capturaImage_url=(e)=>{
  setImage_url(e.target.value)
}

const envioDados=async()=>{
const  dados_organizados={
    titulo,
    categoria,
    autor,
    image_url,
  }

  
  await axios.post("https://api-1-1-nq8g.onrender.com/doar",dados_organizados) 
}


  return (
    <section className={s.queroDoar} >
      <p> Por favor, preencha o formulário com suas informações e as informações do Livro. </p>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <img src={frame} alt="Imagem com icone de livro aberto com borda azul"/>
         <h2>Informações do Livro</h2>
        </div>
        <input type="text" placeholder="Titulo" onChange={capturaTitulo}/>
        <input type="text" placeholder="Categoria" onChange={capturaCategoria} />
        <input type="text" placeholder="Autor" onChange={capturaAutor}/>
        <input type="text" placeholder="Link da Imagem" onChange={capturaImage_url}/>
        <input type="submit" value="Doar" onClick={envioDados} className={s.buttonDoar}/>
      </form>
    </section>
  );
}


