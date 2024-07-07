import { renderAutoList, renderButaiList } from "../js/skelbimai.js";
import { autoData } from "./data/auto.js";
import { butaiData } from "./data/butai.js";






const addDom1 = document.getElementById('add1');

addDom1.innerHTML = renderAutoList(autoData);


const addDom2 = document.getElementById('add2');

addDom2.innerHTML = renderButaiList(butaiData);


