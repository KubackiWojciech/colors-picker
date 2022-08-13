import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDashcube,  } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleRight, faBacteria, faBell } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import './iconSample.sass';

import colorsParams from '../../colorsInputType'

export default function IconSample(param: colorsParams) {
  return (
    <div id='icon-sample-div'
    style={{
      backgroundColor: param.color1,
      color: param.color2
    }}
    >
      <FontAwesomeIcon icon={faFacebook}/>
      <i className='fa-solid fa-user'></i>
      <FontAwesomeIcon icon={faDashcube}/>
      <FontAwesomeIcon icon={faBacteria}/>
      <FontAwesomeIcon icon={faChevronCircleRight}/>
      <FontAwesomeIcon icon={faBell}/>
    </div>
  )
}
