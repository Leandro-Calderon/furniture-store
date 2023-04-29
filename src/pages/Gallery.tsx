import Menu from "../components/menu";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Styles from "./Gallery.module.css";
const Gallery = () => {
  return (
    <>
      <Header />
      <Menu />
      <main className={Styles.container}>
        <h2 className={Styles.titulo}>Galeria</h2>
        <ul className={Styles.gallery}>
          <li>
            <a href="src/assets/img/galeria_01.jpg">
              <img src="src/assets/img/galeria_01.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="src/assets/img/galeria_02.jpg">
              <img src="src/assets/img/galeria_02.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="src/assets/img/galeria_03.jpg">
              <img src="src/assets/img/galeria_03.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="src/assets/img/galeria_04.jpg">
              <img src="src/assets/img/galeria_04.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="src/assets/img/galeria_05.jpg">
              <img src="src/assets/img/galeria_05.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="src/assets/img/galeria_06.jpg">
              <img src="src/assets/img/galeria_06.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="src/assets/img/galeria_07.jpg">
              <img src="src/assets/img/galeria_07.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="src/assets/img/galeria_08.jpg">
              <img src="src/assets/img/galeria_08.jpg" alt="imagen galeria" />
            </a>
          </li>
          <li>
            <a href="src/assets/img/galeria_09.jpg">
              <img src="src/assets/img/galeria_09.jpg" alt="imagen galeria" />
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
