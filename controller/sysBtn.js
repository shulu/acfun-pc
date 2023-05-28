/*
 * @Author: shulu
 * @Date: 2023-05-28 18:47:27
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-28 19:07:36
 * @Description: file content
 * @FilePath: \acfun-pc\controller\sysBtn.js
 */
const { ipcMain } = require('electron');
//接收最小化命令
ipcMain.handle('on-window-min-event', function (event, mainWindow) {
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
