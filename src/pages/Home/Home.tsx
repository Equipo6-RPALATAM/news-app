import { useEffect, useState } from 'react'
import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'
import { LatestNewsGrid } from '../../layout/Grid/LatestNewsGrid'
import { getNews } from '../../api'

export const Home = (): JSX.Element => {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function getResults() {
      setNews(getNews)
    }
  }, [])

  return (
    <>
      <Header></Header>
      <LatestNewsGrid></LatestNewsGrid>
      <Footer></Footer>
    </>
  )
}
