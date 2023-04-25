import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={Styles.footer}>
        <div className={Styles.listado}>
          <h3>Categorias</h3>
          <nav className={Styles.enlace}>
            <a href="#">Cocina</a>
            <a href="#">Oficina</a>
            <a href="#">Jardin</a>
            <a href="#">Cochera</a>
            <a href="#">Dormitorios</a>
          </nav>
        </div>
        <div className={Styles.listado}>
          <h3>Sobre Nosotros</h3>
          <nav className={Styles.enlace}>
            <a href="#">Nuestra Historia</a>
            <a href="#">Misión, Pasión y Valores</a>
            <a href="#">Carreras</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Terminos del Servicio</a>
          </nav>
        </div>
        <div className={Styles.listado}>
          <h3>Soporte</h3>
          <nav className={Styles.enlace}>
            <a href="#">Preguntas Frecuentes</a>
            <a href="#">Ayuda en Línea</a>
            <a href="#">Confianza y Seguridad</a>
          </nav>
        </div>
      </div>
      <p className={Styles.copyright}>
        Todos los derechos reservados, Leandro Web Dev
      </p>
    </footer>
  );
};

export default Footer;
