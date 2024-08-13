import { dialog, ipcMain } from 'electron'
import { Think } from './api/think'
import { Look } from './api/look';
import { PutConfig } from './api/config.put';
import { GetConfig } from './api/config.get';
import { ListFiles } from './api/files.list';
export async function OpenDirectory(win:Electron.BrowserWindow){
    const result = await dialog.showOpenDialog(win, {
        properties: ['openDirectory']
    })
    console.log('directories selected', result.filePaths)
    return result.filePaths[0];
}
export function coevhandlers(win: Electron.BrowserWindow){

    ipcMain.handle('think', async (event, someArgument) => Think(someArgument));
    ipcMain.handle('look', async (event, someArgument) => Look(someArgument));
    ipcMain.handle('put-config', async (event, someArgument) => PutConfig(someArgument));
    ipcMain.handle('get-config', async (event, someArgument) => GetConfig(someArgument));
    ipcMain.handle('list-files', async (event, someArgument) => ListFiles(someArgument));
    ipcMain.handle('open-directory', async (event, someArgument) => OpenDirectory(win));
}