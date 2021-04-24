import { Request, Response  } from "express";
import { MessagesService } from "../service/MessagesService";

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;

    const messagesService = new MessagesService();

    const message = await messagesService.create({
      admin_id,
      text,
      user_id
    });

    return response.json(message);
  }

  // localhost:3333/
  async showByUser(request: Request, response: Response) {
    const { id } = request.params;

    console.log(`Parâmetros ${request.params}`);

    const messagesService = new MessagesService();

    const list = await messagesService.listByUser(id);

    return response.json(list);
  }
}

export { MessagesController }