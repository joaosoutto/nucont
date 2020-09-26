import React from 'react';
import styles from './MiddleThx.module.css';

const MiddleThx = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <p>
        A Nucont se sente responsável por te ajudar não só com estratégias e
        ações de emergência, mas também para te deixar preparado para um novo
        normal que viveremos. Conheça o Plano de retomada!
      </p>
      <button type="button" onClick={() => alert('Obrigado pelo seu tempo!')}>
        FALAR COM CONSULTOR
      </button>
    </div>
  </section>
);

export default MiddleThx;
