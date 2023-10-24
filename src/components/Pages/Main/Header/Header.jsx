import Button from '../../../UI/Button/Button'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
          <div className={styles.header__wrapper}>
      <div className="container">
        <div className={styles.header__body}>
           <Logo />
           <Search />
           <Button name ='Connect wallet'/>
        </div>
          </div>
        </div>
    </header>
  )
}

export default Header