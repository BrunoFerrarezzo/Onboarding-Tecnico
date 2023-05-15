
export const getUserInfo = async (sku,rating,comment) => {
  const date= new Date();
  const data={
    userName: "bruno.ferrarezzo",
    sku: sku,
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    rating: parseInt(rating,10),
    comment: comment
  }

  try {
    const response = await fetch('/api/dataentities/rating_reviews_bf/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'VtexIdclientAutCookie': 'SEU_COOKIE_AQUI'
      },
      body: JSON.stringify(data)
    });

    if (response.status == 201) {
      const userInfo = await response.json();
      console.log(userInfo);
      console.log(JSON.stringify(data));
      console.log(response.status)
      return response.status
    }
  } catch (error) {
    console.log(error);
  }
};
