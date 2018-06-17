const electron  = require('electron')
const path = require('path')
const {app, BrowserWindow} = electron

app.on('ready',()=>{
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, '/images/logos/logo.ico')
    })
    win.setMenu(null)
    win.loadURL(`file://${__dirname}/index.html`)
    win.show()
});