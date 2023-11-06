import { Request, Response } from "express";
import { validation } from "../../shared/middleware";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

interface ICity {
  name: string;
}

export const createValidator = validation({
  body: yup.object().shape({
    name: yup.string().required().min(3)
  })
});

export const create = async (req: Request<{},{}, ICity>, res: Response) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).json(1);
};