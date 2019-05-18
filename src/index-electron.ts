import { app, BrowserWindow } from 'electron';
import * as path from 'path';

require('electron-reload')(__dirname); //引入

let mainWindow: Electron.BrowserWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    // and load the index.html of the app.
    console.log(`file://${__dirname}/index.html`);
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    // mainWindow.loadFile(path.join(__dirname, '../index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

app.on('ready', createWindow);
