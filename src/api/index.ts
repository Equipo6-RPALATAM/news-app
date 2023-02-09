export * from './newsApi'
export const getNews = async (search: string): Promise<any> => {
  try {
    const news = await fetch(`https://newsapi.org/v2/everything?q=${search}`, {
      headers: { 'X-Api-Key': import.meta.env.VITE_API_KEY },
    })
    if (news.ok) {
      const response = await news.json()
      return response
    } else {
      return 'Hubo un error al obtener las noticias'
    }
  } catch (error) {
    return 'No se pudo realizar la solicitud'
  }
}

// export const searchNews = async () => {

//   return
// }
