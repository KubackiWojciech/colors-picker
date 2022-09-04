import React, { useEffect, useState } from 'react';

import './app.sass';
import './tempnavbar.sass'
import InfoBar from './infoBar/InfoBar';
import Navbar from './navbar/Navbar';
import ColorField from './colorField/ColorField';
import axios from 'axios';

import randomColorGenerator from './randomColorGenerator';

export default function App() {
    const [mode, setMode] = useState('gradient');
    const [color1, setColor1] = useState(randomColorGenerator());
    const [color2, setColor2] = useState(randomColorGenerator());
    const [contrastRequired, setContrastRequired] = useState(true)

    useEffect(() => {
        const handleClick = (e: KeyboardEvent) => {
            if (e.key == ' ') {
                let colors = generateColors(contrastRequired);
                setColor1(colors[0]);
                setColor2(colors[1]);
            }
        };

        document.addEventListener('keypress', handleClick);

        return () => {
            document.removeEventListener('keypress', handleClick);
        };
    }, []);



    return (
        <>
            <Navbar setMode = {setMode} />
            <InfoBar 
            color1 = {color1}
            color2 = {color2}
            />
            <ColorField 
                mode={mode}
                color1={color1}
                color2={color2}
            />

        </>
    )
}

function generateColors(contrastRequired: boolean) {
    if (!contrastRequired) {
        console.log('without contrast checker')
        return [randomColorGenerator(), randomColorGenerator()];
    } else {
        let color1 = randomColorGenerator();
        let color2 = randomColorGenerator();

        while(!checkContrast(color1, color2)) {
            color1 = randomColorGenerator();
            color2 = randomColorGenerator();
        }

        return [color1, color2];
    }
}

async function checkContrast(color1: string, color2: string) {
    let result;
    await axios.get(generateCheckContrastLink(color1, color2)).then(x => result = x.data.AALarge);
    console.log('checking contrast: ' + color1 + ' ' + color2);
    return result == 'pass';
}

function generateCheckContrastLink(color1: string, color2: string) {
    return 'https://webaim.org/resources/contrastchecker/?fcolor=' + color1.substring(1) + '&bcolor=' + color2.substring(1) + '&api';
}