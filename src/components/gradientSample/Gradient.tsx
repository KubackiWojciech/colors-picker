import React from 'react';

import './gradient.sass';

import colorsParams from '../../colorsInputType';


export default function Gradient(param: colorsParams) {
  return (
    <div
      id="gradient-color"
      style={{backgroundImage: 'linear-gradient(90deg, ' + param.color1 + ' 0%, ' + param.color2 + ' 100%)'}} 
      // style={{backgroundColor: 'black'}} 
    ></div>
  )
}
