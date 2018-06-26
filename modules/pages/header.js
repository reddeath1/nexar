
'use strict';


let remote = require('electron').remote;

class headerUI{

    constructor(){
        this.headerTopUi();
        this.mainHeaderUi();
        this.headerActions();
        this.init();
    }

    init(){
        let main = document.querySelector('.main'),
        winIn;

        window.addEventListener('resize',function () {
            winIn = remote.getCurrentWindow();
            let width = winIn.getSize()[0];

            if (!winIn.isMaximized()){
                main.style.width = 65+"%";
            }else{
                main.style.width = 81.45+"%";
            }

            console.log(winIn.isMaximized());
        });

    }

    url(page){
        let path = require('path');
        return path.join(__dirname,page);
    }

    headerTopUi(){
        let ui = ["<section class='header-top-content'>" +
            "<section class='win-minimize'>" +
            "<img src='"+this.url('../../views/images/logos/minimize.png')+"'></section>" +
            "<section class='win-maximize'>" +
            "<img src='"+this.url('../../views/images/logos/fullscreen.png')+"'></section>" +
            "<section class='win-close'>" +
            "<img src='"+this.url('../../views/images/logos/close.png')+"'></section>" +
            "</section>"],
            header = document.querySelector(".main-top-header");


        header.innerHTML = ui[0]
    }

    headerActions(){
         let min = document.querySelector('.win-minimize'),
         max =  document.querySelector('.win-maximize'),
         close =  document.querySelector('.win-close');

         min.onclick = function () {
             // Minimize this window
             var window = remote.getCurrentWindow();
             window.minimize();
         };

         max.onclick = function () {
             // Maximize/Unmaximize this window
             var window = remote.getCurrentWindow();
             if (!window.isMaximized()) {
                 window.maximize();
             } else {
                 window.unmaximize();
             }
         };

         close.onclick = function () {
             // Close this window
             var window = remote.getCurrentWindow();
             window.destroy();
         }
    }

    mainHeaderUi(){
        const header = document.querySelector("header");

        header.innerHTML = "Hell yaaaaaaa!";
    }
}

exports.default = {
    headerUI:headerUI
};