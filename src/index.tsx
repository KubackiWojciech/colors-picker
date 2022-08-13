import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

import Gradient from "./components/gradientSample/Gradient";

import './style.sass';

let cardIcon = document.createElement('link');
cardIcon.rel = 'icon';
cardIcon.href = './toucan.png';
document.head.appendChild(cardIcon);

createRoot(document.body).render(
    <App />
)