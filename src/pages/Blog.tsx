import Menu from "../components/menu";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Styles from "./Blog.module.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Header />
      <Menu />
      <main className={Styles.containerBlog}>
        <h2 className={Styles.textCenter}>Nuestro Blog</h2>
        <section className={Styles.blog}>
          <article className={Styles.entrada}>
            <h3>Guia De Colores</h3>
            <img
              className={Styles.imagen}
              src="src/assets/img/nosotros.jpg"
              alt="imagen del blog"
            />

            <div className={Styles.entradaMeta}>
              <p>
                Fecha: <span>22 de Octubre de 2022</span>
              </p>
              <p>
                Escrito por: <span>TiendaMuebles</span>
              </p>
            </div>
            <div className={Styles.entradaBlog}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                voluptatum minima, consequuntur quae quis quidem eos incidunt at
                repellat temporibus, ipsam aperiam cupiditate obcaecati
                molestias nemo? Quam eveniet eum voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                sequi dignissimos, veritatis cumque, ab aliquam exercitationem
                vel, optio a libero dolores amet non facilis illo repudiandae.
                Esse ex tempore id.
              </p>
              <Link className="btn btn:hover maxWidth30" to={"./EntradaBlog"}>
                Leer
              </Link>
            </div>
          </article>
          <aside>
            <h3>Otras Entradas Blog</h3>
            <ul>
              <li>Guia de Colores</li>
              <li>Nuevos Modelos 2022</li>
              <li>Guia para diseño de Interiores</li>
              <li>Guia para Diseño de Exteriores</li>
            </ul>
          </aside>

          <article className={Styles.entrada}>
            <h3>Guia De Colores</h3>
            <img
              className={Styles.imagen}
              src="src/assets/img/nosotros.jpg"
              alt="imagen del blog"
            />

            <div className={Styles.entradaMeta}>
              <p>
                Fecha: <span>22 de Octubre de 2022</span>
              </p>
              <p>
                Escrito por: <span>TiendaMuebles</span>
              </p>
            </div>
            <div className={Styles.entradaBlog}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                voluptatum minima, consequuntur quae quis quidem eos incidunt at
                repellat temporibus, ipsam aperiam cupiditate obcaecati
                molestias nemo? Quam eveniet eum voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                sequi dignissimos, veritatis cumque, ab aliquam exercitationem
                vel, optio a libero dolores amet non facilis illo repudiandae.
                Esse ex tempore id.
              </p>
              <a href="#" className="btn btn:hover maxWidth30">
                Leer
              </a>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Blog;
