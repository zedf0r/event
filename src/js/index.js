import '.././index.html'
import '.././css/main.css'
import img from '../img/goblin.png'
import { gameInit } from './components/gameInit.js'

document.addEventListener('DOMContentLoaded', () => {
    const game = new gameInit(4, '.main');
    game.buildField();
    game.change();
})