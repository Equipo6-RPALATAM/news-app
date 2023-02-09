import { useFetchNewsByQuery, useFetchTopHeadLines } from '../../hooks'
import { LatestNewsGrid } from '../../layout/Grid/LatestNewsGrid'
import { TopNewGrid } from '../../layout/Grid/TopNewsGrid'
import { Footer } from '../../shared/Footer'
import { Header } from '../../shared/Header'

export const Home = (): JSX.Element => {
  const search = 'sports'

  const { data: topNews, isLoading: isLoadingTopNews } = useFetchTopHeadLines()

  const { data: news, isLoading: isLoadingNews } = useFetchNewsByQuery(search)

  return (
    <>
      <Header />
      <section className="latestNews__section">
        {!isLoadingNews && <LatestNewsGrid news={news ?? []} />}
      </section>
      <section className="topnews__section">
        {!isLoadingTopNews && <TopNewGrid news={topNews ?? []} />}
      </section>
      <Footer></Footer>
    </>
  )
}
