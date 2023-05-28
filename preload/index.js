const { contextBridge, ipcRenderer } = require('electron');

const minWindow = () => {
    ipcRenderer.invoke('on-window-min-event');
};

const maxWindow = () => {
    ipcRenderer.invoke('on-window-max-event');
};

const closeWindow = () => {
    ipcRenderer.invoke('on-window-close-event');
};

contextBridge.exposeInMainWorld('sysBtnApi', {
    minWindow,
    maxWindow,
    closeWindow,
});
