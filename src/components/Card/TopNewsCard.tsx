import { type News } from '../../interfaces'
import { Link } from 'react-router-dom'
// import { urlTranform } from '../../utils/url'

interface Props {
  new: News
}

export const TopNewsCard = ({
  new: { title, author, urlToImage },
}: Props): JSX.Element => {
  return (
    <>
      <img className="card__media" src={urlToImage} alt={title} />
      <Link to={`news/${title}`} className="card__title">
        {/* <a  href="#"> */}
        {title}
        {/* </a> */}
      </Link>
      <span className="card__author">{author}</span>
    </>
  )
}
