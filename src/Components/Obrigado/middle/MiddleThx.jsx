import React from 'react';
import styles from './MiddleThx.module.css';

import ReactGA from 'react-ga';

const MiddleThx = () => {
  const handleClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Clicou no botão FALAR COM CONSULTOR',
    });
    alert('Já falaremos com você!');
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p>
          A Nucont se sente responsável por te ajudar não só com estratégias e
          ações de emergência, mas também para te deixar preparado para um novo
          normal que viveremos. Conheça o Plano de retomada!
        </p>
        <button type="button" onClick={handleClick}>
          FALAR COM CONSULTOR
        </button>
      </div>
    </section>
  );
};

export default MiddleThx;
