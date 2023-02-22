import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import style from './styles.module.scss'
export const Header = () => {
  return (
    <header className={style.mainHeader}>
      <div className={style.mainHeaderInnerWrapper}>
        <span className={style.brand}>BiggBeats</span>
        <span className={style.navlinks}>
          <span className={style.navTextLinks}>
            <span className={style.linkstext}>Home </span>
            <span className={style.linkstext}>Shop</span>
            <span className={style.linkstext}>Featured</span>
          </span>
          <span className={style.navIconLinks}>
            <SearchOutlined />
            <UserOutlined />
            <HeartOutlined />
            <ShoppingCartOutlined />
          </span>
        </span>
      </div>
    </header>
  )
}
