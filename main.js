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
		minWidth:500,
		maxWidth:500,
		minHeight:400,
		maxHeight:400,
        height:400,
        frame:false,
        show:false,
        transparent: true,
        icon: path.join(__dirname, './views/images/logos/logo.ico')
    });

    splash.loadURL(path.join(__dirname,'./views/splash.html'));

    // Open the DevTools.
    //splash.webContents.openDevTools();

    // Emitted when the window is closed.
    splash.on("closed", () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        splash.destroy();
        splash = null;
    })
}

function mainWindow(){
    win = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight:600,
        minWidth:800,
        show:false,
        frame:false,
        icon: path.join(__dirname, './views/images/logos/logo.ico')
    });

    win.setMenu(null);
    win.loadURL(path.join(__dirname, "./views/main.html"));


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

    win.once('ready-to-show', () => {
        splash.show();
        setTimeout(function () {
            splash.destroy();
            win.maximize();
            win.show();
        },4000);
    });
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
