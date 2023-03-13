import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { app, BrowserWindow, ipcMain, Tray, Menu, screen,session } from 'electron'

const path = require('path')

let mainWindow
let tray
let remindWindow

app.on('ready', async () => {
  session.defaultSession.loadExtension("C:/Users/Karle/AppData/Local/Google/Chrome/User Data/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/6.5.0_0");
  mainWindow = new BrowserWindow({
    width: 1300,
    // width: 1000,
    height: 600,
    transparent: true,
    frame: false,
    center: true,
    // resizable: false,
    // movable:false,
    webPreferences: {
      webSecurity: false,
      enableRemoteModule: true,
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      nodeIntegration: true,
      contextIsolation: false,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    },
  })
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    mainWindow.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    mainWindow.loadURL(`file://${__dirname}/main.html`)
  }
  
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

ipcMain.on('mainWindow:close', () => {
  mainWindow.hide()
})

ipcMain.on('closeNewWindow', () => {
  remindWindow.close()
})

ipcMain.on('newWindow', () => {
  
 
    createRemindWindow()
  
})

function setTray () {
  tray = new Tray(iconPath)
  tray.setToolTip('Tasky')
  tray.on('click', () => {
    if(mainWindow.isVisible()){
      mainWindow.hide()
    }else{
      mainWindow.show()
    }
  })
  tray.on('right-click', () => {
    const menuConfig = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: () => app.quit()
      }
    ])
    tray.popUpContextMenu(menuConfig)
  })

}

function createRemindWindow () {
  remindWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: screen.getPrimaryDisplay().workAreaSize.width,
    height: screen.getPrimaryDisplay().workAreaSize.height / 2,
    transparent: true, 
    frame: false, 
    toolbar: true,
    resizable: true,
    skipTaskbar: true,
    alwaysOnTop: true,
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  remindWindow.setIgnoreMouseEvents(true)
 
  if (process.env.WEBPACK_DEV_SERVER_URL) { 
    remindWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL + '/public/danmu.html')
  } else {
    createProtocol('app')
    remindWindow.loadURL(`file://${__dirname}/public/danmu.html`)
  } 
  
  // remindWindow.webContents.on('did-finis h-load', () => {
  //   remindWindow.webContents.send('setTask', task)
  // })

  remindWindow.show()
  remindWindow.on('closeNewWindow', () => { remindWindow = null })
  
    
  
}

