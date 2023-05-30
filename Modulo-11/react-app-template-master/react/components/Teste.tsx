/* eslint-disable no-console */
import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useQuery } from 'react-apollo'

import GET_PRODUCT from '../graphql/queries/product.gql'

// tipagem do objeto de interesse retornado através do useProduct
interface Obj {
  selectedItem: {
    itemId: string | undefined
  }
}

const Teste = () => {
  const item = useProduct()

  const obj: Obj = {
    selectedItem: {
      itemId: item?.selectedItem?.itemId,
    },
  }

  console.log('teste ->', obj)

  // query para recuperar os dados do produto através do itemId
  const { data } = useQuery(GET_PRODUCT, {
    variables: {
      skuValue: obj.selectedItem.itemId,
    },
  })

  // useQuery é uma função assincrona, então em um primeiro momento, ela retorna undefined
  if (data !== undefined) {
    console.log(data)
    console.log('productId - >', data.product.productId)

    return (
      <>
        <div className=" ba bw2 flex flex-column">
          <h1 className="db f4 pa4 ma0 w-100 bg-green white">
            Id: {data.product.productId}
          </h1>
          <h1 className="bb bw1 f4 ma0 pa4 w-100">
            Nome: {data.product.productName}
          </h1>
          <h1 className="f4 ma0 pa4 w-100">
            Descrição: {data.product.description}
          </h1>
        </div>
      </>
    )
  }

  return <h1>Produto não encontrado</h1>
}

export default Teste
