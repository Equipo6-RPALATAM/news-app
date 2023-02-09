import { type New } from '../../interfaces'
import { dateTransform } from '../../utils/date'

interface Props {
  new: New
  className: string
}

export const Card = ({
  className,
  new: { title, publishedAt, urlToImage },
}: Props): JSX.Element => {
  return (
    <div className={`card ${className}`}>
      <div
        className="card__body"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <a className="card__title" href="#">
          {title}
        </a>
        <span className="card__date">{dateTransform(publishedAt)}</span>
      </div>
    </div>
  )
}
