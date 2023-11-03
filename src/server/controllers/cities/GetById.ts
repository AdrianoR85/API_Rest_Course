import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IParamsProps {
  id?: number
}

export const getByIdValidator = validation({
  params: yup.object().shape({
    id: yup.number().integer().notRequired().moreThan(0)
  })
});

export const getById = async (req: Request<IParamsProps>, res: Response) => {
  console.log(req.params);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Not implemented!")
};