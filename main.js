const electron  = require('electron')
const {app, BrowserWindow} = electron

app.on('ready',()=>{
    let win = new BrowserWindow({width:800,height:600,frame:false,
        icon: __dirname + '/images/logos/logo.ico'})
    win.loadURL(`file://${__dirname}/index.html`)
})