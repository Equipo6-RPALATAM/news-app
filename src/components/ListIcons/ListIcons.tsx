import saveIcon from '../../assets/icons/save.svg'
import shareIcon from '../../assets/icons/share.svg'

export const ListIcons = () => {
  return (
    <ul className="list-icons">
      <li className="list__item">
        <img src={shareIcon} width="38" alt="" />
      </li>
      <li className="list__item">
        <img src={saveIcon} width="50" alt="" />
      </li>
    </ul>
  )
}
