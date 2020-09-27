import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import styles from './BlackTop.module.css';

import ReactGA from 'react-ga';

const BlackTop = () => {
  const { getName, getEmail, name, email } = useContext(AppContext);

  const handleClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Clicou no botão de cadastro do TOPO',
    });

    localStorage.setItem('nome', name);
    localStorage.setItem('email', email);
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
              onChange={getName}
            />
            <input
              className={styles.input}
              type="text"
              name="E-mail"
              placeholder="E-mail"
              onChange={getEmail}
            />
            <Link to="/obrigado">
              <button
                className={styles.btn}
                type="submit"
                onClick={handleClick}
              >
                QUERO ACOMPANHAR A SÉRIE
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlackTop;
