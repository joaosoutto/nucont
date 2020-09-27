import React from 'react';
import styles from './YellowTop.module.css';

import ReactGA from 'react-ga';

const YellowTop = () => {
  const handleClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Clicou no botão da parte amarela',
    });
    alert('Assista mesmo a série!')
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1>COMO SER ESSENCIAL NA TOMADA DE DECISÃO DAS EMPRESAS?</h1>
        <p>
          Responder essa pergunta <b>pode ser mais fácil</b> do que parece:
        </p>
        <p>
          A Consultoria Contábil é sua aliada para analisar a real situação das
          empresas.
        </p>
        <p>
          No entando, para colocar em prática, você precisa de informações e
          dedicação.
        </p>

        <h6>Vamos conversar a respeito?</h6>

        <button onClick={handleClick} type="submit">
          QUERO ASSISTIR A SÉRIE: CONSULTORIA CONTÁBIL NA PRÁTICA
        </button>
      </div>
    </section>
  );
};

export default YellowTop;
