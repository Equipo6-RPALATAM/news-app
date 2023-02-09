import { useEffect, useState } from 'react'
import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'
import { LatestNewsGrid } from '../../layout/Grid/LatestNewsGrid'
import { TopNewGrid } from '../../layout/Grid/TopNewsGrid'
import { type News } from '../../interfaces'

export const Home = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [news, setNews] = useState<News[]>([])
  const [error, setError] = useState<string>('')

  const [isLoadingTopNews, setIsLoadingTopNews] = useState<boolean>(true)
  const [topNews, setTopNews] = useState<News[]>([])

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
              },
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

  useEffect(() => {
    if (isLoadingTopNews) {
      async function getFetchTopNews() {
        try {
          const response = await fetch(
            'https://newsapi.org/v2/top-headlines?country=us',
            {
              headers: {
                'X-Api-Key': import.meta.env.VITE_API_KEY,
              },
            },
          )
          if (response.ok) {
            const newsResponse = await response.json()
            console.log('here', newsResponse)
            setTopNews(newsResponse.articles)
            setIsLoadingTopNews(false)
          } else {
            setError('Hubo un error al obtener las noticias')
          }
        } catch (error) {
          setError('No se pudo realizar la solicitud')
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getFetchTopNews()
    }
  }, [isLoadingTopNews])

  return (
    <>
      <Header></Header>
      <section className="latestNews__section">
        {!isLoading && <LatestNewsGrid news={news}></LatestNewsGrid>}
      </section>
      <section className="topnews__section">
        {!isLoadingTopNews && <TopNewGrid news={topNews}></TopNewGrid>}
      </section>
      <Footer></Footer>
    </>
  )
}
