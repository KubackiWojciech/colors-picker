import React from 'react'
import colorsParams from '../colorsInputType'

export default function ColorsSamples(param: colorsParams) {
    return (
        <div>
            <div className="both-colors-container">
                <div className="one-color-container" style={{ backgroundColor: param.color1 }}></div>
                <div className="one-color-container" style={{ backgroundColor: param.color2 }}></div>
            </div>
            <div className="both-colors-text-container">
                <h4>{param.color1 + ' ' + param.color2}</h4>
            </div>
        </div>
    )
}
