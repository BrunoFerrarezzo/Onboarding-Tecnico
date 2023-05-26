/* eslint-disable no-console */
import React from 'react'
import { useProduct } from 'vtex.product-context'

interface Obj {
  selectedItem: {
    itemId: string | undefined
  }
}

const Test = () => {
  const item = useProduct()
  const obj: Obj = {
    selectedItem: {
      itemId: item?.selectedItem?.itemId,
    },
  }

  console.log('teste ->', obj)

  return (
    <>
      <h1>{obj.selectedItem.itemId}</h1>
    </>
  )
}

export default Test
