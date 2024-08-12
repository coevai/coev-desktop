import { AppService } from "./helper-backend";

export async function GetConfig({
    folder,
  }:{folder:string} ) {
    const coev_service = new AppService();
    try {
      const file = coev_service.getFile({name:'.coev',folder})
      return JSON.parse(file??{})
    } catch (e) {
      return {}
    }
  }