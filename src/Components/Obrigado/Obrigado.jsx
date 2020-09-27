import React from 'react';
import BottomThx from './bottom/BottomThx';
import MiddleThx from './middle/MiddleThx';
import Top from './top/Top';

const Obrigado = () => (
  <section style={{ backgroundColor: '#ffb700' }}>
    <Top />
    <MiddleThx />
    <BottomThx />
  </section>
);

export default Obrigado;
