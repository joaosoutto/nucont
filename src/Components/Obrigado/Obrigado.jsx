import React from 'react';
import BottomThx from './bottom/BottomThx';
import MiddleThx from './middle/MiddleThx';
import Top from './top/Top';

const Obrigado = () => (
  <div style={{ backgroundColor: '#ffb700' }}>
    <Top />
    <MiddleThx />
    <BottomThx />
  </div>
);

export default Obrigado;
