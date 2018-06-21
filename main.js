const electron  = require('electron') ;
const path = require('path');
const {BrowserWindow,app} = electron;
let win,splash;

if (process.env.NODE_ENV === 'development') {
    require('electron-watch')(
        __dirname,
        'dev:electron-main',             // npm scripts, means: npm run dev:electron-main
        path.join(__dirname, './'),      // cwd
        2000,                            // debounce delay
    );
}

function makeSplash(){
    splash = new BrowserWindow({
        width:500,
        height:400,
        frame:false,
        transparent: true,
        icon: path.join(__dirname, './images/logos/logo.ico')
    });

    splash.loadURL(path.join(__dirname,'./splash/main.html'));

    // Open the DevTools.
    //win.webContents.openDevTools();
}

function mainWindow(){
    win = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight:600,
        minWidth:800,
        show:false,
        icon: path.join(__dirname, './images/logos/logo.ico')
    });

    win.setMenu(null);
    win.loadURL(path.join(__dirname, "./index.html"));


    // Open the DevTools.
    //win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win.destroy();
        win = null;
    })
}

app.on('ready',()=>{
    makeSplash();
    mainWindow();

    setTimeout(function () {
        win.once('ready-to-show', () => {
            splash.destroy();
            win.show();
        });
        splash.destroy();
        win.maximize();
        win.show();
    },10000);
});


// Quit when all windows are closed.
app.on("window-all-closed", () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        mainWindow();
        win.show();
    }
});
