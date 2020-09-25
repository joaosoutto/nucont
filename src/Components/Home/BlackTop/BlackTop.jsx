import React from 'react';
import styles from './BlackTop.module.css';

const BlackTop = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>CONSULTORIA CONTÁBIL NA PRÁTICA</h1>
          <p className={styles.par}>
            <b>Identifique</b> situações problemáticas nas empresas através de
            análise de indicadores e entenda como fazer uma consultoria contábil
            eficiente. Seja o responsável por ajudar as pequenas empresas a se
            recuperarem dos impactos gerados pela crise econômica, aplicando a
            contabilidade como ciência.
          </p>
          <p className={styles.legendL}>com Fernanda Rocha - CEO da Nucont</p>
        </div>
        <div className={styles.right}>
          <p className={styles.subtitle}>Fale agora com nossos consultores!</p>
          <p className={styles.legendR}>
            Conheça a Consultoria para Contadores e garanta uma vaga exclusiva
            na <b>Imersão Nucont</b>
          </p>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              name="Nome"
              placeholder="Nome"
            />
            <input
              className={styles.input}
              type="text"
              name="E-mail"
              placeholder="E-mail"
            />
            <button
              className={styles.btn}
              type="submit"
              onClick={() => handleClick}
            >
              QUERO ACOMPANHAR A SÉRIE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlackTop;
