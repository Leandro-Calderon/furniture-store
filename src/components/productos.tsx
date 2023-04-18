import Styles from "./productos.module.css";

const productos = () => {
  return (
    <section className={Styles.productos}>
      <h2>Nuestros Productos</h2>
      <div className={Styles.listadoProductos}>
        <div>
          <div>
            <img src="src/assets/img/producto1.jpg" alt="imagen producto" />
          </div>
        </div>
        <div>
          <h3>Producto1</h3>
          <p>dfsadfdsfsdfsdfsdafsadfdsfsdsfaaddddddddddddddddddddafsadfsdf</p>
          <p>$200000</p>
          <a href="#">Agregar al carrito</a>
        </div>
        <div>
          <div>
            <img src="src/assets/img/producto2.jpg" alt="imagen producto" />
          </div>
        </div>
        <div>
          <h3>Producto2</h3>
          <p>dfsadfdsfsdfsdfsdafsadfdsfsdsfaaddddddddddddddddddddafsadfsdf</p>
          <p>$200000</p>
          <a href="#">Agregar al carrito</a>
        </div>
        <div>
          <div>
            <img src="src/assets/img/producto3.jpg" alt="imagen producto" />
          </div>
        </div>
        <div>
          <h3>Producto3</h3>
          <p>dfsadfdsfsdfsdfsdafsadfdsfsdsfaaddddddddddddddddddddafsadfsdf</p>
          <p>$200000</p>
          <a href="#">Agregar al carrito</a>
        </div>
        <div>
          <div>
            <img src="src/assets/img/producto4.jpg" alt="imagen producto" />
          </div>
        </div>
        <div>
          <h3>Producto4</h3>
          <p>dfsadfdsfsdfsdfsdafsadfdsfsdsfaaddddddddddddddddddddafsadfsdf</p>
          <p>$200000</p>
          <a href="#">Agregar al carrito</a>
        </div>
        <div>
          <div>
            <img src="src/assets/img/producto5.jpg" alt="imagen producto" />
          </div>
        </div>
        <div>
          <h3>Producto5</h3>
          <p>dfsadfdsfsdfsdfsdafsadfdsfsdsfaaddddddddddddddddddddafsadfsdf</p>
          <p>$200000</p>
          <a href="#">Agregar al carrito</a>
        </div>
        <div>
          <div>
            <img src="src/assets/img/producto6.jpg" alt="imagen producto" />
          </div>
        </div>
        <div>
          <h3>Producto6</h3>
          <p>dfsadfdsfsdfsdfsdafsadfdsfsdsfaaddddddddddddddddddddafsadfsdf</p>
          <p>$200000</p>
          <a href="#">Agregar al carrito</a>
        </div>
      </div>
    </section>
  );
};

export default productos;
