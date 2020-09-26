import React from 'react';
import styles from './Top.module.css';

const Top = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1>OBRIGADO!</h1>
      <p>
        <b>Fique ligado!</b> Você receberá em alguns instantes um e-mail da
        Fernanda Rocha com o acesso para acompanhar a série. toda semana vamos
        enviar o link da Consultoria Contábil com o tema que será abordado
      </p>
      <p>
        Por favor, confira também a aba de promoções e sua caixa de spam ou lixo
        eletrônico, em alguns casos o e-mail chega nessas outras caixas.
      </p>
    </div>
  </section>
);

export default Top;
