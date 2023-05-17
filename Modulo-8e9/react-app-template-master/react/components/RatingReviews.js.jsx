/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */

import React, { useState } from 'react'
import { useProduct } from 'vtex.product-context'

import { getUserInfo } from './api.js'

const RatingReviews = () => {
  const productContextValue = useProduct()
  const sku = productContextValue.selectedItem.itemId
  // estados utilizados para recuperar dados do formulário
  const [rating, setRating] = useState('')
  const [comment, setComment] = useState('')
  // estado que define qual o contúdo do modal, se estiver inativo conteudo = null
  const [modal, setModal] = useState(null)

  // atualiza o valor de sku, rating e comment quando esses respectivos campos estão sendo modificados
  const handleChange = (event) => {
    if (event.target.id === 'rating') {
      setRating(event.target.value)
    } else {
      setComment(event.target.value)
    }
  }

  // "fecha" o modal, atribui o conteudo dele como null
  const closeModal = () => {
    setModal(null)
  }

  // definindo possíveis conteúdos para o modal
  const modalCreated = (
    <div className="ba ml7 flex flex-column items-center">
      <div className="bb bg-green h2 w-100 flex justify-end items-center">
        <span className="f2 black pointer" onClick={closeModal}>
          &times;
        </span>
      </div>
      <div className="h4 ph4">
        <h3 className="green">Registro inserido com sucesso!</h3>
      </div>
    </div>
  )

  const modalError = (
    <div className="ba ml7 flex flex-column items-center">
      <div className="bb bg-yellow h2 w-100 flex justify-end items-center">
        <span className="f2 black pointer" onClick={closeModal}>
          &times;
        </span>
      </div>
      <div className="h4 ph4">
        <h3 className="black">
          Houve um problema ao inserir os registros na base de dados.
        </h3>
      </div>
    </div>
  )

  const modalFields = (
    <div className="ba ml7 flex flex-column items-center">
      <div className="bb bg-red h2 w-100 flex justify-end items-center">
        <span className="f2 black pointer" onClick={closeModal}>
          &times;
        </span>
      </div>
      <div className="h4 ph4">
        <h3 className="red">Preencha todos os campos obrigatórios!</h3>
      </div>
    </div>
  )

  // ao clicar em submit verifica se os campos obrigatorios foram preenchidos
  // se foram preenchidos corretamente chama a função que realiza o fetch e atualiza o valor do modal
  const handleSubmit = (event) => {
    event.preventDefault() // evita que a pagina seja atualizada ao enviar o formulário
    if (rating.trim() === '') {
      setModal(modalFields)

      return
    }

    console.log(sku, '<-sku')

    getUserInfo(sku, rating, comment).then((response) => {
      if (response === 201) {
        setModal(modalCreated)
      } else {
        setModal(modalError)
      }
    })
  }

  return (
    <>
      <div className="flex justify-center w-100 items-center ">
        <form
          className="flex flex-column helvetica w-30 items-center mb7 ph5 pv7 ba bw1"
          onSubmit={handleSubmit}
        >
          <h2>Envie sua avaliação</h2>
          <input
            className="h2 mt3 pa2 w-100"
            id="rating"
            type="number"
            placeholder="Digite sua avaliação"
            onChange={handleChange}
          />
          <input
            className=" h2 mt3 pa2 w-100"
            id="comment"
            type="text"
            placeholder="Digite o seu comentário"
            onChange={handleChange}
          />
          <button
            className="ba b--blue bg-action-primary br3 mt4 mb2 pa3 pointer w-50 white"
            type="submit"
          >
            Send
          </button>
        </form>
        {modal}
      </div>
    </>
  )
}

export default RatingReviews
