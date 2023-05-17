/* eslint-disable no-console */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */

export const getUserInfo = async (sku, rating, comment) => {
  const date = new Date()
  const data = {
    userName: 'bruno.ferrarezzo',
    sku: sku,
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    rating: parseInt(rating, 10),
    comment: comment,
  }

  try {
    const response = await fetch(
      '/api/dataentities/rating_reviews_bf/documents',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'VtexIdclientAutCookie': 'SEU_COOKIE_AQUI'
        },
        body: JSON.stringify(data),
      }
    )

    if (response.status === 201) {
      console.log(response)

      return response.status
    }
  } catch (error) {
    console.error(error)
  }
}