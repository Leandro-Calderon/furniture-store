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
            <input
              type="text"
              id="nombre"
              placeholder="coloca tu nombre"
              required
            />
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
          <div className={Styles.campos}>
            <label htmlFor="cliente">Cliente</label>
            <input type="radio" name="opcion" id="cliente" />
          </div>
          <div className={Styles.campos}>
            <label htmlFor="proveedor">Proveedor</label>
            <input type="radio" name="opcion" id="proveedor" />
          </div>
          {/* <div className={Styles.campos}>
            <label htmlFor="categoria">Categoría de Interés</label>
            <input list="categorias"  name="categorias" />
            <datalist id="categorias" />
            <option value="Cocina" />
            <option value="Exterior" />
            <option value="Dormitorio" />
            <option value="Comedor" />
            <option value="Oficina" />
          </div> */}
        </fieldset>

        <input className="btn btn:hover" type="submit" value="Enviar" />
      </form>
      <Footer />
    </>
  );
};

export default Contact;
