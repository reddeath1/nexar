const remote = require('electron').remote;
const BrowserWindow = remote.BrowserWindow;
const app = remote.app;
const path = require('path');

let win = null,add_user = document.querySelector('.add-user'),
mainWindow = remote.getCurrentWindow();

add_user.onmousedown = function () {
    addUser();

    win.once('ready-to-show', () => {
        win.maximize();
        win.show();
    });
};

function addUser() {
     win = new BrowserWindow({
         width: 800,
         height: 600,
         minHeight:600,
         minWidth:800,
         parent:mainWindow,
         frame:false,
         show:false,
         icon: path.join(__dirname, './views/images/logos/logo.ico')
     });

     win.loadURL(path.join(__dirname, './views/add_user.html'));

    // Emitted when the window is closed.
    win.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.

        win.destroy();
        win = null;
    })
}