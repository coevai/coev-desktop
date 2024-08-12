import { app, BrowserWindow, shell, ipcMain } from 'electron'

function delay(timeout:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
export async function Look({
    webapp
  }:{webapp:string}) {
    try { 
      await delay(3000);
      const win = new BrowserWindow({ width: 800, height: 600 })
      win.hide();
      await win.loadURL(webapp);
      const cap = await win.capturePage(undefined,{stayHidden:true});
      win.close();
      return {errors:'',screenshot:cap.toDataURL()};
    } catch (e) {
      throw e;
    }
  }