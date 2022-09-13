const { app, BrowserWindow } = require("electron");

require("@electron/remote/main").initialize();

function createWindow() {
    //Create new browser window
    const win = new BrowserWindow({
        title: "SMS4PC",
        width: 1000,
        height: 800,
        // resizable: false,
        webPreferences: {
            enableRemoteModule: true
        }
    });

    win.loadURL('http://localhost:3000');
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