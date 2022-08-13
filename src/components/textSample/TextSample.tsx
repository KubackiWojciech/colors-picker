import React from 'react'

import colorsParams from '../../colorsInputType';
import './textSample.sass';

export default function TextSample(param: colorsParams) {
  return (
    <div id='text-container'
    style={{
        backgroundColor: param.color1,
        color: param.color2
    }}
    >{'Text sample'}</div>
  )
}
