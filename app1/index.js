import _ from 'lodash';
import client from './js/customer1/client';
import servers from './js/customer1/servers';

import './css/customer1/theme1/style.css'

import png from 'images/customer1/theme1/img1_bg.png';

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
