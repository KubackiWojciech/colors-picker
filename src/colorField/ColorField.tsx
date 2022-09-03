import React from 'react'
import Gradient from '../components/gradientSample/Gradient'
import IconSample from '../components/iconSample/IconSample'
import SeparateColors from '../components/separateColorsSample/SeparateColors'
import TextSample from '../components/textSample/TextSample'

interface params {
    mode: string,
    color1: string,
    color2: string
}

export default function ColorField(param: params) {
    console.log('passed colors: ' + param.color1 + ' ' + param.color2);
    
    return (
        <>
            {param.mode == 'gradient' ? <Gradient color1={param.color1} color2={param.color2} /> : undefined}
            {param.mode == 'separate-colors' ? <SeparateColors color1={param.color1} color2={param.color2} /> : undefined}
            {param.mode == 'icon' ? <IconSample color1={param.color1} color2={param.color2} /> : undefined}
            {param.mode == 'text' ? <TextSample color1={param.color1} color2={param.color2} /> : undefined}
        </>
    )
}
