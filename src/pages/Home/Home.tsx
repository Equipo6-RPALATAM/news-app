import { useEffect, useState } from 'react'
import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'
import { LatestNewsGrid } from '../../layout/Grid/LatestNewsGrid'
import { type New } from '../../interfaces'
// import { getNews } from '../../api'

export const Home = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [news, setNews] = useState<Array<New>>([])
  const [error, setError] = useState<string>('')

  // const PROXY = 'https://dailyfastnews.netlify.app/'

  const search = 'sports'
  useEffect(() => {
    if (isLoading) {
      async function getFetchData() {
        try {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=${search}`,
            {
              headers: {
                'X-Api-Key': import.meta.env.VITE_API_KEY,
                'Access-Control-Allow-Origin': '*',
              },
              mode: 'cors',
            },
          )
          if (response.ok) {
            const newsResponse = await response.json()
            console.log('here', newsResponse)
            setNews(newsResponse.articles)
            setIsLoading(false)
          } else {
            setError('Hubo un error al obtener las noticias')
          }
        } catch (error) {
          setError('No se pudo realizar la solicitud')
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getFetchData()
    }
  }, [isLoading])

  return (
    <>
      <Header></Header>
      {!isLoading && <LatestNewsGrid news={news}></LatestNewsGrid>}
      <Footer></Footer>
    </>
  )
}
