import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IParamsProps {
  id?: number;
}

interface IBodyParams {
  name?: string;
}

export const updateByIdValidator = validation({
  body: yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  }),
  params: yup.object().shape({
    name: yup.string().required().min(3),
  })
});

export const updateById = async (req: Request<IParamsProps, {}, IBodyParams>, res: Response) => {
  console.log(req.params);
  console.log(req.body);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Not implemented!")
};