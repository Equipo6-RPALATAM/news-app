import { type News } from '../../interfaces'
import { dateTransform } from '../../utils/date'

interface Props {
  new: News
  className?: string
  media?: boolean
}

export const NewsCard = ({
  // className,
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
    // <div className={`card ${className}`}>
    //   <div className="card__body">
    //     <a className="card__title" href="#">
    //       {title}
    //     </a>
    //     <span className="card__date">{dateTransform(publishedAt)}</span>
    //     {media && renderMedia}
    //   </div>
    // </div>
    <>
      <a className="card__title" href="#">
        {title}
      </a>
      <span className="card__date">{dateTransform(publishedAt)}</span>
      {media && renderMedia}
    </>
  )
}
