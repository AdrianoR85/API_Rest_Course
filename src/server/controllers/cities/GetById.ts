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
  
  if(Number(req.params.id) === 9999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: "Record not found",
    }
  });

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    id: req.params.id,
    name: "Joinville"
  })
};