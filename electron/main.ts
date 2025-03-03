import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    console.log(process.env.VITE_DEV_SERVER_URL);

    console.log(process.env.VITE_DEV_SERVER_URL);

    if (process.env.VITE_DEV_SERVER_URL) {
        mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL); // En desarrollo, carga desde Vite
    } else {
        mainWindow.loadFile(path.join(__dirname, "../dist/index.html")); // En producción, carga el build de Vite
    }
    

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};


app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});


