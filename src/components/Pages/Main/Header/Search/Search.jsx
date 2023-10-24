import styles from './search.module.scss'

const Search = () => {
  return (
    <div className={styles.search}>
      <div className="icon-search"></div>
      <input placeholder='Search for ...' type="search" className={styles.search__input}  />
    </div>
  )
}

export default Search