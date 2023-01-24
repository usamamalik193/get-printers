// const { BrowserWindow, app } = require("electron");

// const isDev = process.env.NODE_ENV !== "production";

// const createWindow = () => {
//   const win = new BrowserWindow({
//     height: 500,
//     width: 800,
//     "auto-hide-menu-bar": true,
//     // show: false,
//   });

//   if (isDev) {
//     win.webContents.openDevTools();
//   }
//   win.loadFile("index.html");
//   //   win.loadURL("http://www.google.com");
//   let list = win.webContents.getPrinters();
//   console.log("All printer available are ", list);
// };

// // const handlePrint = () => {
// //   const { remote } = require("electron");
// //   const { BrowserWindow, dialog, shell } = remote;
// //   let printWindow = new BrowserWindow({
// //     "auto-hide-menu-bar": true,
// //     show: false,
// //   });
// //   printWindow.loadURL("www.google.com");
// //   let list = printWindow.webContents.getPrinters();
// //   console.log("All printer available are ", list);
// // };

// app.whenReady().then(() => {
//   createWindow();
// });
////////////////////////////////////////////////////
const { app, BrowserWindow } = require("electron");
require("@electron/remote/main").initialize();
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  win.loadFile(path.join(__dirname, "./index.html"));

  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("browser-window-created", (_, window) => {
  require("@electron/remote/main").enable(window.webContents);
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
