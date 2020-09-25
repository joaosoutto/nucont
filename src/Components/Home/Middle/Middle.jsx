import React from 'react';
import styles from './Middle.module.css';

const Middle = () => (
  <section className={styles.section}>
    <div className={styles.content}>
      <h1>ESSA SÉRIE É PRA VOCÊ CONTADOR:</h1>
      <ul>
        <li>
          <span />
          Que quer ter processos contábeis ágeis
        </li>
        <li>
          <span />
          Que quer aumentar o valor percebido pelo seu cliente e ajudá-lo na
          tomada de decisão
        </li>
        <li>
          <span />
          Que deseja ver na prática como aplicar uma consultoria contábil eficaz
          e com método claro
        </li>
      </ul>

      <h1>O QUE SERÁ ABORDADO NA SÉRIE:</h1>
      <ul>
        <li>
          <span />
          Análises de indicadores de empresas reais no contexto atual
        </li>
        <li>
          <span />
          Doenças financeiras como insolvência, undertrading e excesso de
          endividamento
        </li>
        <li>
          <span />
          Metodologia científica para aplicação de consultoria contábil
        </li>
        <li>
          <span />
          Pesquisas e comparativos de mercado para entender o contexto das
          pequenas empresas na pandemia
        </li>
      </ul>
    </div>
  </section>
);

export default Middle;
