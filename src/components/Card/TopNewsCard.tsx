import { type News } from '../../interfaces'

interface Props {
  new: News
}

export const TopNewsCard = ({
  new: { title, author, urlToImage },
}: Props): JSX.Element => {
  return (
    <>
      <img className="card__media" src={urlToImage} alt={title} />
      <a className="card__title" href="#">
        {title}
      </a>
      <span className="card__author">{author}</span>
    </>
  )
}
