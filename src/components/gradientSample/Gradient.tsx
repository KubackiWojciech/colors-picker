import React from 'react';

import './gradient.sass';

interface params {
  color1: string,
  color2: string
}


export default function Gradient(param: params) {
  return (
    <div
      id="gradient-color"
      style={{backgroundImage: 'linear-gradient(90deg, ' + param.color1 + ' 0%, ' + param.color2 + ' 100%)'}} 
      // style={{backgroundColor: 'black'}} 
    ></div>
  )
}
