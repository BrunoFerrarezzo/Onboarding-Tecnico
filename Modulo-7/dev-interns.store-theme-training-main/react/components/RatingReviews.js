import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useState } from 'react';
import { getUserInfo } from "./api.js"

const RatingReviews = () =>{
  //estados utilizados para recuperar dados do formulário
  const [sku, setSku] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  //estado que define qual o contúdo do modal, se estiver inativo conteudo = null
  const [modal, setModal] = useState(null);

  //atualiza o valor de sku, rating e comment quando esses respectivos campos estão sendo modificados
  const handleChange=(event) => {
    if(event.target.id==="sku"){
      setSku(event.target.value);
    }
    else if(event.target.id==="rating"){
      setRating(event.target.value)
    }
    else{
      setComment(event.target.value)
    }
  }

  //"fecha" o modal, atribui o conteudo dele como null
  const closeModal=() =>{
    setModal(null)
  }

  //definindo possíveis conteúdos para o modal
  const modalCreated=(<div onClick={closeModal}>Registro inserido com sucesso</div>)
  const modalError=(<div onClick={closeModal}>Houve um problema ao inserir os registros na base de dados</div>)
  const modalFields=(<div onClick={closeModal}>Preencha todos os campos obrigatórios</div>)

  //ao clicar em submit verifica se os campos obrigatorios foram preenchidos
  //se foram preenchidos corretamente chama a função que realiza o fetch e atualiza o valor do modal
  const handleSubmit=(event) =>{
    event.preventDefault();//evita que a pagina seja atualizada ao enviar o formulário
    if(sku.trim()==='' || rating.trim()===''){
      console.log("Preencha todos os campos obrigatórios");
      setModal(modalFields);
      return
    }

    getUserInfo(sku,rating,comment).then((response)=>{
      if(response == 201){
        setModal(modalCreated)
      }
      else{
        setModal(modalError)
      }
    })

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="sku" type="text" placeholder="Digite o sku do produto" onChange={handleChange}></input>
        <input id="rating" type="number" onChange={handleChange}></input>
        <input id="comment" type="text" placeholder="Digite o seu comentário" onChange={handleChange}></input>
        <button type="submit">Send</button>
      </form>
      {modal}
    </>
  );
}

export default RatingReviews;
