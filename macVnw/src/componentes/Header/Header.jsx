import logo from "../../assets/logo.png";
import app from "../../assets/app.png";
import pedido from "../../assets/cel.png";

export const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="" />

        <nav>
          <a href="">
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
