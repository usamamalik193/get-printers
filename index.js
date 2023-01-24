// const electron = require("electron");
// // Importing BrowserWindow from Main
// const BrowserWindow = electron.remote.BrowserWindow;

const { BrowserWindow } = require("@electron/remote");

var button1 = document.getElementById("current");
var button2 = document.getElementById("current1");
var options = {
  silent: false,
  printBackground: true,
  color: false,
  margin: {
    marginType: "printableArea",
  },
  landscape: false,
  pagesPerSheet: 1,
  collate: false,
  copies: 1,
  header: "Header of the Page",
  footer: "Footer of the Page",
};
if (button1) {
  button1.addEventListener(
    "click",
    (event) => {
      let win = BrowserWindow.getFocusedWindow();

      // To get the list of printers //////////////

      // let list = win.webContents.getPrintersAsync().then((result) => {
      //   console.log(result);
      //   // debugger;
      //   if (result) {
      //     const defaultP = result.find(
      //       (x) => x.name === "NPI5A07F6 (HP LaserJet Professional P 1102w)"
      //     );

      //     // defaultP.isDefault((value) => (value.isDefault = true));
      //     console.log("defalut selected", defaultP.isDefault);
      //     win.webContents.print({
      //       silent: true,
      //       deviceName: "NPI5A07F6 (HP LaserJet Professional P 1102w)",
      //     });
      //   }

      //   // .print(options, (success, failureReason) => {
      //   //   if (!success) console.log(failureReason);

      //   //   console.log("Print Initiated");
      //   // });
      // });
      // console.log("All printer available are ", list);

      // To Open windows printing dialog box///////////

      // win.webContents.print(options, (success, failureReason) => {
      //   if (!success) console.log(failureReason);

      //   console.log("Print Initiated");
      // });

      //Default print to deviceName

      win.webContents.print({
        silent: true,
        deviceName: "Microsoft Print to PDF",
      });
    },
    false
  );
}
if (button2) {
  button2.addEventListener(
    "click",
    (event) => {
      let win = BrowserWindow.getFocusedWindow();
      win.webContents.print({
        silent: true,
        deviceName: "NPI5A07F6 (HP LaserJet Professional P 1102w)",
      });
    },
    false
  );
}
