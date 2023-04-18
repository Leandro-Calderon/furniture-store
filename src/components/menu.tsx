import { Link } from "react-router-dom"
import styles from "./menu.module.css"

const Menu = () => {
  return (
    <nav className={styles.navContainer}>
    <ul className={styles.navPrincipal}>
    <li>
    <Link style={{textDecoration: 'none'}}  to={"/"}>Home</Link>
    </li>
    <li>
    <Link style={{textDecoration: 'none'}}  to={"/about"}>Nosotros</Link>
    </li>
    <li>
    <Link style={{textDecoration: 'none'}}  to={"/blog"}>Blog</Link>
    </li>
    <li>
    <Link style={{textDecoration: 'none'}} to={"/contact"}>Contacto</Link>
    </li>
    <li>
    <Link style={{textDecoration: 'none'}}  to={"/gallery"}>Galeria</Link>
    </li>
    <li>
    <Link style={{textDecoration: 'none'}}  to={"/store"}>Tienda</Link>
    </li>
    </ul>
  </nav>
  )
}

export default Menu