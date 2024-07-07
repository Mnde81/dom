import { renderSportTable } from "../js/sportas.js";

import { basketballData } from "./data/basketball.js";
import { footballData } from "./data/football.js";



const appDom = document.getElementById('app');

appDom.innerHTML = renderSportTable(basketballData);


const appDom2 = document.getElementById('app2');

appDom2.innerHTML = renderSportTable(footballData);


