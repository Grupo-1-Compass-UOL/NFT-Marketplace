import styles from './TopCreatorHeader.module.css'

const TopCreatorHeader = () => {
  return (
    <li className={styles.header}>
      <div className={styles.header__position}>#</div>
      <div className={styles.header__name}>Artist</div>
      <div className={styles.header__change}>Change</div>
      <div className={styles.header__number_sold}>NFTs Sold</div>
      <div className={styles.header__volume_sold}>Volume</div>
    </li>
  )
}

export default TopCreatorHeader
