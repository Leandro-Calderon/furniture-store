import Styles from "./categoriasProductos.module.css";

const CategoriasProductos = () => {
  return (
    <section className={Styles.categorias}>
      <h2>Categorías de Productos</h2>
      <div className={Styles.listadoCategorias}>
        <div className={Styles.categoria}>
          <img src="src/assets/img/categoria1.jpg" alt="Imagen Categoria" />
          <a href="#">Oficina</a>
        </div>
        <div className={Styles.categoria}>
          <img src="src/assets/img/categoria2.jpg" alt="Imagen Categoria" />
          <a href="#">Hogar</a>
        </div>
        <div className={Styles.categoria}>
          {" "}
          <img src="src/assets/img/categoria3.jpg" alt="Imagen Categoria" />
          <a href="#">Cocina</a>
        </div>
      </div>
    </section>
  );
};

export default CategoriasProductos;
