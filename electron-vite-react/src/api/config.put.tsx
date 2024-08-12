import { AppService } from "./helper-backend";

export interface saved_state {folder:string,prompt?:string,webapp?:string,showScreenshot?:boolean,selectedFiles?:string[],apiKey?:string};
interface input {
  folder:string,
  content:saved_state
}
export async function PutConfig({
    folder,content
  }: input) {
    const coev_service = new AppService();
    coev_service.updateFile({name:'.coev',folder,content:JSON.stringify(content,null,2)})
    return {}
  }
  