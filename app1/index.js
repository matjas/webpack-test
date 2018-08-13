import _ from 'lodash';
import client from './js/customer1/client';
import servers from './js/customer1/servers';

import './css/customer1/theme1/style.css';

//import homeIcon from '../images/home.png';

import img1Bg from './images/customer1/theme1/img1_bg.png';
import img1 from './images/customer1/theme1/img1.png';

//png;

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

client.displayMessage;
servers.displayMessage;

document.body.appendChild(component());
