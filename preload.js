const { contextBridge, ipcRenderer } = require('electron');
const os = require('os');

function doesThisWork() {
    console.log('Sup?');
}

contextBridge.exposeInMainWorld("api", 
    {
        send: (channel, data) => {
            let validChannels = ['toMain'];
            if(validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
            console.log(`Sent ${data} on channel ${channel}`);
        }
        , receive: (channel, func) => {
            let validChannels = ['fromMain'];
            if(validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
            console.log(`Received on channel ${channel}`);
        }
        , sup: () => {
            doesThisWork();
        }
    }
);

ipcRenderer.on('editor-event', (event, arg) => {
    console.log(arg);
    event.sender.send('editor-reply', `Received ${arg}`);
});
