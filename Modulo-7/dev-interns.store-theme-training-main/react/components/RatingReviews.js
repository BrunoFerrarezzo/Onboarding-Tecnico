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
  const modalCreated=(
    <div class="ba ml7 flex flex-column items-center">
      <div class="bb bg-green h2 w-100 flex justify-end items-center"><span class="f2 black pointer" onClick={closeModal}>&times;</span></div>
      <div class="h4 ph4"><h3 class="green">Registro inserido com sucesso!</h3></div>

    </div>
  )
  const modalError=(
    <div class="ba ml7 flex flex-column items-center">
    <div class="bb bg-yellow h2 w-100 flex justify-end items-center"><span class="f2 black pointer" onClick={closeModal}>&times;</span></div>
    <div class="h4 ph4"><h3 class="black">Houve um problema ao inserir os registros na base de dados.</h3></div>

  </div>
  )
  const modalFields=(
    <div class="ba ml7 flex flex-column items-center">
      <div class="bb bg-red h2 w-100 flex justify-end items-center"><span class="f2 black pointer" onClick={closeModal}>&times;</span></div>
      <div class="h4 ph4"><h3 class="red">Preencha todos os campos obrigatórios!</h3></div>

    </div>
  )

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
    <div class="flex justify-center w-100 items-center ">
    <form class="flex flex-column helvetica w-30 items-center mb7 ph5 pv7 ba bw1" onSubmit={handleSubmit}>
        <h2>Envie sua avaliação</h2>
        <input class="h2 mt3 pa2 w-100"id="sku" type="text" placeholder="Digite o sku do produto" onChange={handleChange}></input>
        <input class="h2 mt3 pa2 w-100" id="rating" type="number" placeholder="Digite sua avaliação" onChange={handleChange}></input>
        <input class=" h2 mt3 pa2 w-100"id="comment" type="text" placeholder="Digite o seu comentário" onChange={handleChange}></input>
        <button  class="ba b--blue bg-action-primary br3 mt4 mb2 pa3 pointer w-50 white" type="submit">Send</button>
      </form>
      {modal}
    </div>
    </>
  );
}

export default RatingReviews;
