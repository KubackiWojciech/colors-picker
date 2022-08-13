import React, { useEffect, useState } from 'react'
import $ from 'jquery';

import Gradient from './components/gradientSample/Gradient';

import SeparateColors from './components/separateColorsSample/SeparateColors';
import IconSample from './components/iconSample/IconSample';
import TextSample from './components/textSample/TextSample';
import './app.sass';
import './tempnavbar.sass'

export default function App() {
    const [mode, setMode] = useState('icon');
    const [color1, setColor1] = useState(randomColorGenerator());
    const [color2, setColor2] = useState(randomColorGenerator());

    useEffect(() => {
        const handleClick = (e: KeyboardEvent) => {
            if (e.key == ' ') {
                setColor1(randomColorGenerator());
                setColor2(randomColorGenerator());

                console.log('space event')
            }
        };

        document.addEventListener('keypress', handleClick);

        return () => {
            document.removeEventListener('keypress', handleClick);
        };
    }, []);

    return (
        <>
            <div id="navbar">
                <div id="buttons-div">
                    <button onClick={() => setMode('gradient')} >Gradient</button>
                    <button onClick={() => setMode('separate-colors')} >Separate colors</button>
                    <button onClick={() => setMode('icon')} >Icons</button>
                    <button onClick={() => setMode('text')} >Text</button>
                </div>
                <div className="both-colors-container">
                    <div className="one-color-container" style={{ backgroundColor: color1 }}></div>
                    <div className="one-color-container" style={{ backgroundColor: color2 }}></div>
                </div>
                <div className="both-colors-text-container">
                    <h4>{color1 + ' ' + color2}</h4>
                </div>
            </div>

            {mode == 'gradient' ? <Gradient color1={color1} color2={color2} /> : undefined}
            {mode == 'separate-colors' ? <SeparateColors color1={color1} color2={color2} /> : undefined}
            {mode == 'icon' ? <IconSample color1={color1} color2={color2} /> : undefined}
            {mode == 'text' ? <TextSample color1={color1} color2={color2} /> : undefined}

        </>
    )
}

function randomColorGenerator() {
    const places = [0, 1, 2];
    const mainPlace = places.splice(Math.floor(Math.random() * 3));
    const value = Math.floor(Math.random() * 255).toString(16);
    const place0 = places.splice(Math.floor(Math.random() * 2));
    const place255 = places.splice(0)

    let rgb = ['00', '00', '00'];

    rgb[mainPlace[0]] = value;
    rgb[place0[0]] = '00';
    rgb[place255[0]] = 'ff';

    return '#' + rgb[0] + rgb[1] + rgb[2];
}