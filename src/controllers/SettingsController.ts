import { Request, Response } from "express";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingService } from "../service/SettingsService";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;
    
    const settingsService = new SettingService();

    try {
      const settings = await settingsService.create({ chat, username });
  
      return response.json(settings)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }
}
export { SettingsController }