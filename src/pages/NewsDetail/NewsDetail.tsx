import { ListIcons } from '../../components/ListIcons/ListIcons'
import { Detail } from '../../components/Detail/Detail'
import { useParams } from 'react-router-dom'
import { useFetchNewsByQuery, useFetchTopHeadLinesByQuery } from '../../hooks'
import { DetailLayout } from '../../layout/Detail/DetailLayout'
import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'

export const NewsDetail = (): JSX.Element => {
  const { slug } = useParams()

  const { data: news, isLoading: isLoadingNews } = useFetchTopHeadLinesByQuery(
    slug ?? '',
  )

  return (
    <>
      <Header></Header>
      <DetailLayout>
        <ListIcons />
        {!isLoadingNews && <Detail news={news ?? []} />}
      </DetailLayout>
      <Footer></Footer>
    </>
  )
}
