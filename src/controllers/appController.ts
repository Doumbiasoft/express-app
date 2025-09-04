import { Request, Response } from "express";
import { postData, renderHome } from "../services/appService";
import { sendResponse } from "../utils/response";

class AppController {
  getHome = async (req: Request, res: Response) => {
    const { firstName } = req.params;
    return res.render(
      "home",
      renderHome("Hey", `${firstName} how are you doing?`)
    );
  };

  getForm = async (req: Request, res: Response) => {
    return res.render("form");
  };
  postForm = async (req: Request, res: Response) => {
    const { name } = req.body;
    console.log(name);

    return sendResponse(res, postData(name));
  };
}
const appController = new AppController();
export const getHome = appController.getHome;
export const getForm = appController.getForm;
export const postForm = appController.postForm;
