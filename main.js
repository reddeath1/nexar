const electron  = require('electron')
const path = require('path')
const {app, BrowserWindow} = electron

app.on('ready',()=>{
    let win = new BrowserWindow({
<<<<<<< HEAD
        width:800,
        height:600,
        icon:path.join(__dirname,"/images/logos/logo.ico")})
    win.setMenu(null)
    win.loadURL(`file://${__dirname}/index.html`)
    win.show()
})
=======
        width: 800,
        height: 600,
        icon: path.join(__dirname, '/images/logos/logo.ico')
    })
    win.setMenu(null)
    win.loadURL(`file://${__dirname}/index.html`)
    win.show()
});
>>>>>>> 0e6e64e57709a715bf2df31b8717435c3e49fccf
