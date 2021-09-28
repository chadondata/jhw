const { Menu, shell, app, ipcMain } = require('electron');

const template = [ // This is the template for the main menu.
    {
        role: 'help',
        submenu: [
            {
                label: 'About JHW for ' + process.platform,
                click() {
                    shell.openExternal('https://github.com/chadondata/jhw');
                }
            }
        ]
    }
];

if(process.platform === 'darwin') {
    template.unshift({
        label: app.getName()
        , submenu: [
            { role: 'about' }
            , { type: 'separator' }
            , { role: 'quit' }
        ]
    });
}

if (process.env.DEBUG) {
    template.push(
        {
            label: 'Debugging',
            submenu: [
                {
                    label: 'Dev Tools'
                    , role: 'toggleDevTools'
                }
                , {
                    type: 'separator'
                }
                , {
                    role: 'reload'
                }
            ]
        }
    );
}

ipcMain.on('editor-reply', (event, arg) => {
    console.log(`Received reply from web page: ${arg}`);
});

const menu = Menu.buildFromTemplate(template);
module.exports = menu;
