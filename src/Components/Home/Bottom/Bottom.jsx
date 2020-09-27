import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import styles from './Bottom.module.css';

import ReactGA from 'react-ga';

const Bottom = () => {
  const { getName, getEmail, name, email } = useContext(AppContext);

  const handleClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Clicou no botão de cadastro do FINAL DA PÁGINA',
    });

    localStorage.setItem('nome', name);
    localStorage.setItem('email', email);
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.lCol}>
          <p>
            A Consultoria Contábil na Prática é uma série de vídeo gratuita.
            Será realizada durante o mês de Julho e para ter acesso exclusivo,
            preencha o formulário ao lado!
          </p>
        </div>

        <div className={styles.rCol}>
          <h3>Fale agora com nossos consultores!</h3>
          <p>
            Conheça a Consultoria para contadores e garanta uma vaga exclusiva
            na <span>Imersão Nucont</span>
          </p>
          <form>
            <input
              name="nome"
              placeholder="Nome"
              type="text"
              onChange={getName}
            />
            <input
              name="email"
              placeholder="E-mail"
              type="text"
              onChange={getEmail}
            />
            <Link to="/obrigado">
              <button onClick={handleClick} type="submit">
                QUERO ACOMPANHAR A SÉRIE
              </button>
            </Link>
          </form>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        <h1>ESTAMOS JUNTOS NESSA</h1>
      </div>
    </section>
  );
};

export default Bottom;
