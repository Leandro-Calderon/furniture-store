import Styles from "./about.module.css";

const About = () => {
  return (
    <section className={Styles.sobreNosotros}>
      <div className={Styles.containerGrid}>
        <div className={Styles.textoNosotros}>
        <h2>Sobre nosotros</h2>
        <p>
          Somos un reconocido equipo de diseño mobiliario que te asesoramos para
          que puedas tener el mejor hogar, hermoso y funcional
        </p>
        </div>
      </div>
    </section>
  );
};
export default About;
