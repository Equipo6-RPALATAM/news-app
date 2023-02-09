import saveIcon from '../../assets/icons/save.svg'
import shareIcon from '../../assets/icons/share.svg'
// import { ReactComponent as Icon } from '../../assets/icons/save.svg'

export const ListIcons = () => {
  return (
    <ul>
      <li>
        <img src={saveIcon} width="50" alt="" />
      </li>
      <li>
        <img src={shareIcon} width="50" alt="" />
      </li>
    </ul>
  )
}
