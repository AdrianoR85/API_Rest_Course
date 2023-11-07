import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middleware";

interface IParamsProps {
  id?: number
}

export const deleteByIdValidator = validation({
  params: yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  })
});

export const deleteById = async (req: Request<IParamsProps>, res: Response) => {
  if(Number(req.params.id) === 9999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: "Record not found",
    }
  });

  return res.status(StatusCodes.NO_CONTENT).send();
};