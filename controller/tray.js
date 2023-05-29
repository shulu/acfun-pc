/*
 * @Author: shulu
 * @Date: 2023-05-29 10:45:31
 * @LastEditors: shulu
 * @LastEditTime: 2023-05-29 10:45:34
 * @Description: file content
 * @FilePath: /acfun-pc/controller/tray.js
 */
const { Menu, Tray, app } = require('electron');

const trayMenu = Menu.buildFromTemplate([{ label: 'Item 1' }, { role: 'quit' }]);

function createTray(app, win) {
    const tray = new Tray('../acfun-icon-32x32.png');
    tray.setToolTip('ReadIt');
    tray.on('click', (e) => {
        if (e.shiftKey) {
            app.quit();
        } else {
            win.isVisible() ? win.hide() : win.show();
        }
    });
    tray.setContextMenu(trayMenu);
}

module.exports = createTray;
