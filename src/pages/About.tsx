import Menu from "../components/menu";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Styles from "./About.module.css";

const About = () => {
  return (
    <main className={Styles.container}>
      <Header />
      <Menu />
      <h2 className={Styles.textCenter}>¿Quienes somos?</h2>

      <div className={Styles.containerGrid}>
        <div className={Styles.imagen}>
          <img src="src/assets/img/nosotros.jpg" alt="Imagen nosotros" />
        </div>
        <div className={Styles.informacionNosotros}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            voluptates quae vel quam. Perspiciatis provident veritatis error
            consequatur. Cumque ratione architecto adipisci sunt harum facere
            veniam facilis omnis reprehenderit. Quis.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            soluta consequuntur eum iusto pariatur porro animi recusandae hic
            deleniti ipsum suscipit totam cum iste repellendus, molestias ipsa
            sequi delectus aspernatur!
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
