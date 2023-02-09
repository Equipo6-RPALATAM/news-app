import { type News } from '../../interfaces'
import { dateTransform } from '../../utils/date'

interface Props {
  new: News
  media?: boolean
}

export const NewsCard = ({
  new: { title, publishedAt, urlToImage, description },
  media,
}: Props): JSX.Element => {
  const renderMedia = (
    <>
      <img className="card__media" src={urlToImage} alt={title} />
      <p className="card__description">{description}</p>
    </>
  )

  return (
    <>
      <a className="card__title" href="#">
        {title}
      </a>
      <span className="card__date">{dateTransform(publishedAt)}</span>
      {media && renderMedia}
    </>
  )
}
