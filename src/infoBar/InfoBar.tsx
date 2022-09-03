import React, { useEffect, useState } from 'react'
import axios from 'axios';
import colorsParams from '../colorsInputType'
import ColorsSamples from './ColorsSamples';

import './infoBar.sass';

interface contrastInfo {
    ratio: string,
    AA: string,
    AALarge: string,
    AAA: string,
    AAALarge: string
}

export default function InfoBar(param: colorsParams) {
    const [colorContrastInfo, setColorContrastInfo] = useState({
        ratio: '',
        AA: '',
        AALarge: '',
        AAA: '',
        AAALarge: ''
    } as contrastInfo);

    useEffect(() => {
        axios.get(generateCheckContrastLink(param.color1, param.color2)).then(x => {
            setColorContrastInfo(x.data);
            console.log(x.data);
        })
    }, [param.color1, param.color2]);
    return (
        <div className='info-bar'>
            <ColorsSamples
                color1={param.color1}
                color2={param.color2}
            />
            <a 
                style = {{color: colorContrastInfo.AALarge == 'pass' ? 'green' : 'red'}}
            >
                {colorContrastInfo.ratio}
            </a>
        </div>
    )
}

function generateCheckContrastLink(color1: string, color2: string) {
    return 'https://webaim.org/resources/contrastchecker/?fcolor=' + color1.substring(1) + '&bcolor=' + color2.substring(1) + '&api';
}