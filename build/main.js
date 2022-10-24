const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require('electron-is-dev');

require("@electron/remote/main").initialize();

function createWindow() {
    //Create new browser window
    const win = new BrowserWindow({
        title: "SMS4PC",
        width: 1000,
        height: 800,
        resizable: false,
        webPreferences: {
            enableRemoteModule: true
        }
    });

    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/indev.html')}`);
    // win.setMenu(null);
}

app.on('ready', createWindow);

//Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})