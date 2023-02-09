import { dateTransform } from '../../utils/date'
import type { News } from '../../interfaces'

interface Props {
  news: News[]
}

export const Detail = ({ news }: Props) => {
  const { author, title, publishedAt, description, urlToImage } = news[0]

  // console.log(urlToImage)
  return (
    <div className="detail">
      <div className="detail__container">
        <span className="detail__date">{dateTransform(publishedAt)}</span>
      </div>
      <div className="detail__container">
        <h2 className="detail__title">{title}</h2>
      </div>
      <div className="detail__container">
        <span className="detail__author">
          By {author.charAt(0).toUpperCase() + author.substring(1)}
        </span>
      </div>
      <div className="detail__container">
        <img
          className="detail__media"
          src="https://api.lorem.space/image/game"
          alt={title}
        />
      </div>
      <p className="detail__description">{description}</p>
    </div>
  )
}
