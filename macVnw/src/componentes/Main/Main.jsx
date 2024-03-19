import bigMacMonster from "../../assets/bigMac.png";
import bigMacPequeno from "../../assets/LBigMac.png";
import sorvete from "../../assets/sorvete.png";
import batata from "../../assets/batata.png";
import { useState } from "react";

export const Main = () => {
  const [comida, setComida] = useState(bigMacMonster);

  return (
    <>
      <main>
        <section>
          <div>
            <img src={comida} alt="Imagem do bigMac grande" />
            <h1>
              BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>?
            </h1>
          </div>

          <div>
            <h2>Você tem fome de que?</h2>
            
            <img
              src={bigMacPequeno}
              alt="Imagem do bigMac"
              onClick={() => setComida(bigMacMonster)}
            />

            <img
              src={batata}
              alt="Imagem da batata do mac"
              onClick={() => setComida(batata)}
            />

            <img
              src={sorvete}
              alt="Imagem do sorvete do mac"
              onClick={() => setComida(sorvete)}
            />
          </div>
        </section>
      </main>
    </>
  );
};
