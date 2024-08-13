import { AppService } from "./helper-backend";

export async function Think(body:any) {
    const coev_service = new AppService();
    const files = await coev_service.writeCode(body);
    return files
  }