
'use strict';


let remote = require('electron').remote;

class headerUI{

    constructor(){
        this.headerTopUI();
        this.mainHeaderUI();
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
                main.style.width = 70+"%";
            }else{
                main.style.width = 84+"%";
            }
        });

    }

    url(page){
        let path = require('path');
        return path.join(__dirname,page);
    }

    headerTopUI(){
        let ui = ["<section class='header-top-contents'>" +
            "<h1>Dashboard</h1>" +
            "</section>" +
            "" +
            "<section class='header-top-actions'>" +
            "<section class='win-minimize'>" +
            "<i class='fa fa-minus'></i>" +
            "</section>" +
            "<section class='win-maximize'>" +
            "<i class='fa fa-sort win-m-left'></i>" +
            "</section>" +
            "<section class='win-close'>" +
            "<i class='fa fa-times'></i>" +
            "</section>" +
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

    headerLogoUI(){
         return "<div class=\"triangle anim\" title='cectron'>" +
             "    <div></div>" +
             "    <div></div>" +
             "</div>";
    }

    mainHeaderUI(){
        const ui = ["<section class='main-header'>" +
            this.headerLogoUI()
            + "</section>"],
            header = document.querySelector("header");

        header.innerHTML = ui[0];
    }
}

exports.default = {
    headerUI:headerUI
};