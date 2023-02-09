import { type News } from '../../interfaces'
import { NewsCard } from '../../components/Card/NewsCard'
import { Card } from '../../components/Card/Card'

interface Props {
  news: News[]
}

export const LatestNewsGrid = ({ news }: Props): JSX.Element => {
  return (
    <div className="latestNews__grid">
      <Card className="card__item-1">
        <NewsCard new={news[1]}></NewsCard>
      </Card>
      <Card className="card__item-2">
        <NewsCard new={news[2]} media></NewsCard>
      </Card>
      <Card className="card__item-3">
        <NewsCard new={news[3]}></NewsCard>
      </Card>
      <Card className="card__item-4">
        <NewsCard new={news[4]}></NewsCard>
      </Card>
      <Card className="card__item-5">
        <NewsCard new={news[5]}></NewsCard>
      </Card>
      <Card className="card__item-6">
        <NewsCard new={news[6]}></NewsCard>
      </Card>
      <Card className="card__item-7">
        <NewsCard new={news[7]}></NewsCard>
      </Card>
      <Card className="card__item-8">
        <NewsCard new={news[8]}></NewsCard>
      </Card>
      <Card className="card__item-9">
        <NewsCard new={news[9]}></NewsCard>
      </Card>
      <Card className="card__item-10">
        <NewsCard new={news[10]}></NewsCard>
      </Card>
    </div>
  )
}
