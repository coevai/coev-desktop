import puppeteer from 'puppeteer';

import { app, BrowserWindow, shell, ipcMain } from 'electron'

function delay(timeout:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
export async function Look({
    webapp
  }:{webapp:string}) {


    let browser = await puppeteer.launch({});
    let page = await browser.newPage();
    try { 
      await delay(3000);
      const win = new BrowserWindow({ width: 800, height: 600 })
      win.hide();

      // Load a remote URL
      await win.loadURL(webapp);
      const cap = await win.capturePage(undefined,{stayHidden:true});
      win.close();
      return {errors:'',screenshot:cap.toDataURL()};
      // win.once('ready-to-show', () => {
      //   win.show()
      // })
    // await page.setViewportSize({ width: 1280, height: 768 });
    // let errors = '';
    // page.on('pageerror', (err) => {
    //   errors += err.toString()+err.stack + '\n';
    // })
    // await page.goto(webapp);
    // await delay(5000);
    // const screenshot = (await page.screenshot()).toString('base64');
    // await page.close();
    // await browser.close();
    // return {screenshot,errors:errors.slice(0,500)}
    } catch (e) {
      await page.close();
      await browser.close();
      throw e;
    }
  }