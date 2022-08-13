import React from 'react'

import colorsParams from '../../colorsInputType'

import './separateColorsSample.sass'

export default function SeparateColors(param: colorsParams) {
  return (
    <div id='separate-colors-div'>
      <div style={{backgroundColor: param.color1}}></div>
      <div style={{backgroundColor: param.color2}}></div>
    </div>
  )
}
