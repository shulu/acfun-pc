/*
 * @Author: shulu
 * @Date: 2023-04-07 14:31:24
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-28 19:15:43
 * @Description: file content
 * @FilePath: \acfun-pc\main.js
 */
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const WinState = require('electron-win-state').default;
let mainWindow = null;
const createWindow = () => {
    const winState = new WinState({
        defaultWidth: 1280,
        defaultHeight: 1024,
        electronStoreOptions: {
            name: 'win-state-main',
        },
    });
    mainWindow = new BrowserWindow({
        ...winState.winOptions,
        minWidth: 1078,
        minHeight: 658,
        icon: './acfun-icon-32x32.png',
        webPreferences: {
            preload: path.resolve(__dirname, './preload/index.js'),
        },
        autoHideMenuBar: true,
        frame: false,
        show: false,
    });
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
    mainWindow.on('close', () => {
        winState.saveState(mainWindow);
    });
    mainWindow.loadURL('http://localhost:5173/');
    mainWindow.webContents.openDevTools({ mode: 'bottom', activate: false });
    winState.manage(mainWindow);

    createTray(app, mainWindow);
};

//接收最小化命令
ipcMain.handle('on-window-min-event', function () {
    mainWindow.minimize();
});
//接收最大化命令
ipcMain.handle('on-window-max-event', function () {
    if (mainWindow.isMaximized()) {
        mainWindow.restore();
    } else {
        mainWindow.maximize();
    }
});
//接收关闭命令
ipcMain.handle('on-window-close-event', function () {
    mainWindow.close();
});

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
