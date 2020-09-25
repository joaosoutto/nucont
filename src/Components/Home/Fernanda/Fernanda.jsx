import React from 'react';
import styles from './Fernanda.module.css';

import fernanda from '../../../Assets/img_fernandarocha2.png';

const Fernanda = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1>QUEM É FERNANDA ROCHA?</h1>
      <div className={styles.subcontent}>
        <img className={styles.photo} alt="Fernanda sorrindo" src={fernanda} />
        <div className={styles.right}>
          <h4>Fala galera, beleza?</h4>
          <p>
            Eu sou a Fernanda Rocha,{' '}
            <span>
              fundadora da Nucont e do Movimento Contabilidade Sem Chatice.
            </span>{' '}
            Como empresária contábil eu já estive no fundo do poço, a ponto de
            largar tudo. Até que através da Contabilidade Consultiva me reergui
            e achei uma maneira de entregar mais valor para as empresas e com
            isso fui mais valorizada.{' '}
            <span>Cansada de ser tratada como mal necessário,</span> decidi
            fazer diferente. Corri atrás e resolvi encarar de frente o desafio
            de aplicar na prática a verdadeira contabilidade. Não foi fácil,
            muitas vezes me decepcionei, mas{' '}
            <span>
              me coloquei na missão de mudar para sempre a forma com que
              Contadores e Empresas se relacionam.{' '}
            </span>
            Hoje tenho um compromisso com a classe contábil de replicar tudo o
            que eu aprendi nessa jornada e garantir que o contador salve
            empresas e ajude os empresários na tomada de decisões. Vem comigo!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Fernanda;
