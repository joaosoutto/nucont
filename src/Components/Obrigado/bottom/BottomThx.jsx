import React from 'react';
import styles from './BottomThx.module.css';

import telegram from '../../../Assets/telegram.png';

import ReactGA from 'react-ga';

const BottomThx = () => {
  const handleClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Clicou no botão do telegram',
    });
    alert('Conecte-se já!');
  };
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p>
          QUER FAZER PARTE DO CANAL OFICIAL DA NUCONT COM NÓTICAS, DICAS E
          CONTEÚDOS EXCLUSIVOS VOLTADOS A CONTABILIDADE CONSULTIVA?{' '}
        </p>
        <div className={styles.sub}>
          <img src={telegram} alt="telegram logo" className={styles.logo} />
          <button type="button" onClick={handleClick}>
            CONECTE-SE COM A GENTE: TELEGRAM
          </button>
        </div>
      </div>
    </section>
  );
};

export default BottomThx;
