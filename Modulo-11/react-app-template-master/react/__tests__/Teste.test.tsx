/* eslint-disable no-console */
import { render } from '@vtex/test-tools/react'
import React from 'react'

// eslint-disable-next-line jest/no-mocks-import
import { useProduct } from '../__mocks__/vtex.product-context'
import Teste from '../components/Teste'

interface Obj {
  selectedItem: {
    itemId: string | undefined
  }
}

// mock do useProduct
const mockedUseProduct = useProduct
const mockedProduct = (item: Obj | undefined) => {
  mockedUseProduct.mockImplementation(() => item)
}

// mock do Apollo
jest.mock('react-apollo', () => {
  return {
    useQuery: jest.fn().mockReturnValue({
      data: {
        product: {
          productId: 200372,
          productName: 'Mirakl test product 01',
          description: 'Description long',
        },
      },
      loading: false,
      error: null,
    }),
  }
})

describe('Test.tsx', () => {
  it('Should render the item id', () => {
    mockedProduct(undefined)
    const { getByText } = render(<Teste />)

    expect(getByText('Id: 200372')).toBeInTheDocument()
  })
})
