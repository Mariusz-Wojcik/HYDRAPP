import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const glassCounter = document.querySelector('.glass__counter--js');
const buttonPlus = document.querySelector('.container__button-plus--js');
const buttonMinus = document.querySelector('.container__button-minus--js');
const key = new Date().toISOString().slice(0, 10);

let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue){
    currentGlassCounter=localStorageValue;}
    else {
        localStorage.setItem(key, 0);
    }

    glassCounter.innerHTML = localStorageValue;

buttonPlus.addEventListener('click',()=>{
    currentGlassCounter++;
    glassCounter.innerHTML=currentGlassCounter; 
    localStorage.setItem(key, currentGlassCounter);
})

buttonMinus.addEventListener('click',()=>{
    if (currentGlassCounter > 0 ){
    currentGlassCounter--;}
    glassCounter.innerHTML=currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
}
)