/* eslint-disable no-console */
import { render } from '@vtex/test-tools/react'
import React from 'react'

// eslint-disable-next-line jest/no-mocks-import
import { useProduct } from '../__mocks__/vtex.product-context'
import Test from '../components/Test'

interface Obj {
  selectedItem: {
    itemId: string | undefined
  }
}

const mockedUseProduct = useProduct
const mockedProduct = (item: Obj) => {
  mockedUseProduct.mockImplementation(() => item)
}

describe('Test.tsx', () => {
  it('Should render the item id', () => {
    mockedProduct({ selectedItem: { itemId: '33098' } })
    const { getByText } = render(<Test />)

    expect(getByText('33098')).toBeInTheDocument()
  })
})
