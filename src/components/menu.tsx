import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
    <ul>
    <li>
    <Link to={"/"}>Home</Link>
    </li>
    <li>
    <Link to={"/about"}>Nosotros</Link>
    </li>
    <li>
    <Link to={"/blog"}>Blog</Link>
    </li>
    <li>
    <Link to={"/contact"}>Contacto</Link>
    </li>
    <li>
    <Link to={"/gallery"}>Galeria</Link>
    </li>
    <li>
    <Link to={"/store"}>Tienda</Link>
    </li>
    </ul>
  </nav>
  )
}

export default Menu