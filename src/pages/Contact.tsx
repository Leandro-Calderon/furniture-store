import Menu from "../components/menu";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Header />
      <Menu />
      <h2>Contacto</h2>
      <form>
        <fieldset>
          <legend>Tus datos</legend>
          <div className={Styles.campos}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" placeholder="coloca tu nombre" />
          </div>
          <div className={Styles.campos}>
            <label htmlFor="asunto">Asunto:</label>
            <input type="text" id="asunto" placeholder="tu asunto" />
          </div>
          <div className={Styles.campos}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="tu E-mail" />
          </div>
          <div className={Styles.campos}>
            <label htmlFor="tel">Teléfono:</label>
            <input type="tel" id="tel" placeholder="tu teléfono" />
          </div>
          <div className={Styles.campos}>
            <label htmlFor="date">Mensaje:</label>
            <textarea
              placeholder="escriba su texto"
              name="area"
              id="area"
            ></textarea>
          </div>
        </fieldset>
        <fieldset>
          <legend>País</legend>
          <div className={Styles.campos}>
            <label htmlFor="pais">País</label>
            <select name="pais" id="pais">
              <option value="">--Seleccione--</option>
              <option value="MX">Mexico</option>
              <option value="AR">Argentina</option>
              <option value="BR">Brasil</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Información Extra</legend>
        </fieldset>
      </form>
      <Footer />
    </>
  );
};

export default Contact;
