import styles from './sort.module.scss'

import Select from 'react-select'

const options = [
  { value: 'Recently added', label: 'Recently added' },
  { value: 'Lately Added', label: 'Lately added' }
]

const options2 = [
  { value: 'Auctions', label: 'Auctions' },
  { value: 'Auctions', label: 'Auctions' },


]

const Sort = () => {
  return (
    <div className={styles.Sort}>
      <Select options={options} classNamePrefix='custom-select'/>
      <Select options={options2} classNamePrefix='custom-select' />

    </div>
  )
}

export default Sort