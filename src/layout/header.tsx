import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={styles.titulo}>Tienda <span>Muebles</span></h1> 
    </header>
  );
};

export default Header;
