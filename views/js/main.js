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

     win.loadURL("https://nevaa.co");

    // Emitted when the window is closed.
    win.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow.show();
        win.destroy();
        win = null;
    })
}


app.on("activate", () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        if(!win.isMaximized()){
            win.maximize();
        }
        win.show();
    }
});