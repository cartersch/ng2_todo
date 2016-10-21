var electron = require("electron");
var {app, BrowserWindow} = electron;

app.on('ready', () => {
    var mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
}); 