import { Request, Response } from "express";
import { validation } from "../../shared/middleware";
import * as yup from "yup";
import { StatusCodes } from "http-status-codes";

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidator = validation({
  query: yup.object().shape({
    page: yup.number().notRequired().moreThan(0),
    limit: yup.number().notRequired().moreThan(0),
    filter: yup.string().notRequired()
  })
});

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log(req.query);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Not implemented!")
};