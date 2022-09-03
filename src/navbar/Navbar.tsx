import React from 'react'

import './navBar.sass';

export default function Navbar(param: {setMode: (x: string) => void}) {

  return (
    <div id='nav-bar'>
        <button onClick={() => param.setMode('gradient')} >Gradient</button>
        <button onClick={() => param.setMode('separate-colors')} >Separate colors</button>
        <button onClick={() => param.setMode('icon')} >Icons</button>
        <button onClick={() => param.setMode('text')} >Text</button>
    </div>
  )
}
