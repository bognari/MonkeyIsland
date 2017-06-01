"use strict";

var slides = ['cocktails', 'alkoholfrei', 'spirituosen'];
var time = 30000;

var param = window.location.search.substr(1).split('&');

switch (param[0]) {
    case 'cocktails' :
        changeContent('cocktails');
        break;
    case 'bier' :
        changeContent('bier');
        break;
    case 'alkoholfrei' :
        changeContent('alkoholfrei');
        break;
    case 'spirituosen' :
        changeContent('spirituosen');
        break;
    case 'switch' :
        diashow(param[1]);
        break;
    default:
        changeContent('bier');
}

function changeContent(name, show) {
    if (typeof show === 'undefined' || show === 'show') {
        document.getElementById(name).classList.remove('hide');
    } else {
        document.getElementById(name).classList.add('hide');
    }
}

function diashow(number) {
    var date = new Date();
    var slot = Math.floor(date.getTime() / time);
    var slide = (slot + number) % slides.length;
    changeContent(slides[slide]);
    window.setInterval(function () {
        var d = new Date();
        var n = d.getTime();
        n /= 1000;

        if (Math.floor(n % 30) === 0) {
            changeContent(slides[slide], 'hide');
            slot = Math.floor(d.getTime() / time);
            slide = (slot + number) % slides.length;
            changeContent(slides[slide]);
        }
    }, 1000);
}
