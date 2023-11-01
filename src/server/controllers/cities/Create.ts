import { Request, Response } from "express";
import { validation } from "../../shared/middleware";
import * as yup from "yup";

interface ICity {
  name: string;
  state: string;
}

interface IFilter {
  filter?: string;
  limit: number;
};

export const createValidator = validation({
  body: yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().min(3)
  }),
  query: yup.object().shape({
    filter: yup.string().required().min(3)
  })
});

export const create = async (req: Request<{},{}, ICity>, res: Response) => {
  console.log(req.body);
  return res.send('Create!');
};