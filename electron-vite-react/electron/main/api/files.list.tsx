import { promises as fspromises } from "fs";
import {join} from 'path'

const walk = async (dirPath:string) => {
  const promises = await Promise.all(
  await fspromises.readdir(dirPath, { withFileTypes: true }).then((entries) => entries.map((entry) => {
    const childPath = join(dirPath, entry.name)
    return {path:childPath,is_folder:entry.isDirectory()}
    // return entry.isDirectory() ? walk(childPath) : childPath
  })));
  return promises.flat(Number.POSITIVE_INFINITY);
}

export async function ListFiles({
    path,
  }:{path:string}) {
    const files = await walk(path)
    return files;
  }