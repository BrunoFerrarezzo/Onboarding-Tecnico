
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
        'VtexIdclientAutCookie': 'eyJhbGciOiJFUzI1NiIsImtpZCI6IjE3MkRGODk2REQ2MkQ3Mzk4MzkxOTNDODBCMjc4MzBBRkNENTY1OUIiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJicnVuby5mZXJyYXJlenpvQGFjY3QuZ2xvYmFsIiwiYWNjb3VudCI6ImVzdGFnaW9hY2N0IiwiYXVkaWVuY2UiOiJhZG1pbiIsInNlc3MiOiIwZDQ4MzJmNC05MWZkLTQxY2ItOTZiOC1lNmU5YmVhNTljZWEiLCJleHAiOjE2ODM5NzYzMzEsInVzZXJJZCI6ImZhMGEwNzQ1LTZlYWQtNDU3ZC1hOGQzLTQ2NzAyYTg3OGRlZSIsImlhdCI6MTY4Mzg4OTkzMSwiaXNzIjoidG9rZW4tZW1pdHRlciIsImp0aSI6IjI2ZjIxY2I4LTVhZjctNDgxZS1hYWI0LTMxNzcxZTJhOGFkMSJ9.l0hMnnm1ZvMGuiZQMegLV0nvJuC7uG4RugysxtPeBqbhMk1PNKO1NfHJoA95IDHdjyI1o6Pxa6AKXV5yrHs4Ug'
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
