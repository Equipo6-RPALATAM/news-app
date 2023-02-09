import { type New } from '../../interfaces'
import { Card } from '../../components/Card/Card'

interface Props {
  news: New[]
}

export const LatestNewsGrid = ({ news }: Props): JSX.Element => {
  return (
    <section className="latestNews__section">
      <div className="latestNews__grid">
        <Card new={news[1]} className="card__item-1"></Card>
        <Card new={news[2]} className="card__item-2"></Card>
        <Card new={news[3]} className="card__item-3"></Card>
        <Card new={news[4]} className="card__item-4"></Card>
        <Card new={news[5]} className="card__item-5"></Card>
        <Card new={news[6]} className="card__item-6"></Card>
        <Card new={news[7]} className="card__item-6"></Card>
        <Card new={news[8]} className="card__item-6"></Card>
      </div>
    </section>
  )
}
