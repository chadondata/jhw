const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const menu = require('./menu');

let window;

function createWindow() {
    window = new BrowserWindow({
        width: 800
        , height: 600
        , webPreferences: {
            preload : path.join(__dirname, 'preload.js') // build the api in there
//            , sandbox : true
            , contextIsolation: true
        }
    });
    window.loadFile(`${__dirname}/index.html`);
    window.api.send('toMain', 'some data');
}

Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function() {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function() {
    if(process.platform !== 'darwin') app.quit();
});

