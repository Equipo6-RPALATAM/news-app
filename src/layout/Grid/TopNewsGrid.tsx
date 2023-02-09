import { type News } from '../../interfaces'
import { TopNewsCard } from '../../components/Card/TopNewsCard'
import { Card } from '../../components/Card/Card'

interface Props {
  news: News[]
}

export const TopNewGrid = ({ news }: Props): JSX.Element => {
  return (
    <div className="topnews__grid">
      <Card>
        <TopNewsCard new={news[0]}></TopNewsCard>
      </Card>
      <Card>
        <TopNewsCard new={news[1]}></TopNewsCard>
      </Card>
      <Card>
        <TopNewsCard new={news[2]}></TopNewsCard>
      </Card>
      <Card className="card__item-4">
        <TopNewsCard new={news[3]}></TopNewsCard>
      </Card>
    </div>
  )
}
