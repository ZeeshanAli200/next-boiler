import {
  HeartOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { SideBar } from '@/components'
import style from './styles.module.scss'
const Header = () => {
  const [open, setopen] = useState(false)

  const handleClose = () => {
    setopen(!open)
  }
  return (
    <>
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
              <SearchOutlined className={style.navIcon} />
              <UserOutlined className={style.navIcon} />
              <HeartOutlined className={style.navIcon} />
              <ShoppingCartOutlined className={style.navIcon} />
              <MenuOutlined
                className={style.navIconMenuDrawer}
                onClick={handleClose}
              />
            </span>
          </span>
        </div>
      </header>
      <SideBar open={open} handleClose={handleClose} />
    </>
  )
}
export default Header
