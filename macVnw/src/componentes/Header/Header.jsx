import logo from "../../assets/logo.png";
import app from "../../assets/app.png";
import pedido from "../../assets/cel.png";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />

        <nav>
          <a href="" className={styles.imgCel}>
            <img src={app} alt="imagem de um celular amarelo" />
            Baixe o App
          </a>
          <button>
            Peça seu Méqui!
            <img src={pedido} alt="" />
          </button>
        </nav>
      </header>
    </>
  );
};
