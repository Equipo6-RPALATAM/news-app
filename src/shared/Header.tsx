export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <a className="header__logo" href="index.html">
        Daily
      </a>
      <ul className="header__list">
        <li className="header__list-item">Sports</li>
        <li className="header__list-item">Policy</li>
        <li className="header__list-item">Music</li>
        <li className="header__list-item">Tech</li>
      </ul>
      <div className="header__container-buttons">
        <button className="header__button header__button--register">
          Register
        </button>
        <button className="header__button header__button--signin">
          Sign in
        </button>
      </div>
      <img src="" alt="" />
    </header>
  )
}
