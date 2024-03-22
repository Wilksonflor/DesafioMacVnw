import sofa from "../../assets/sofa.png";
import predio from "../../assets/predio.png";
import medidas from "../../assets/medidas.png";
import styles from "./Cards.module.css";
export const Cards = () => {
  const cardsContent = [
    {
      img: sofa,
      descricao: "Que tal um #MéquiNoSofá?",
      altImg: "Imagem de um pacote do mac em cima do sofá",
    },
    {
      img: predio,
      descricao: "venha conhecer nossa nova loja",
      altImg: "Imagem do prédio do Mc Donalt's",
    },
    {
      img: medidas,
      descricao: "Confira as medidas que o Méqui adotou!",
      altImg: "Imagem falando sobre as medidas que o Mc Donalt's está tomando",
    },
  ];

  return (
    <>
      <section className={styles.containerCards}>
        <h2>Promoção</h2>

        <div className={styles.content}>
          {cardsContent.map((data, index) => (
            <div key={index} className={styles.cards}>
              <img src={data.img} alt={data.altImg} />
              <h3>{data.descricao}</h3>
              <button>Clique aqui!</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
