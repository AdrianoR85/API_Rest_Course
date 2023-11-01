import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";


type TProperty = "body" | "header" | "params" | "query";

type TAllSchemas = Record<TProperty, Schema<any>>;

type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

// field: o campo que será validado
// schema: qual o modelo de validação
export const validation: TValidation = (schemas) => async (req, res, next) => {

  const errorsResult: Record<string, Record<string, string>> = {}  
  
  Object.entries(schemas).forEach( async([key, schema]) => {
    try{
      schema.validateSync(req[key as TProperty], {abortEarly: false});
    }
    catch (err) {
      const yupError = err as ValidationError;
      const errors: Record<string, string> = {}
  
      yupError.inner.forEach(error => {
        if(!error.path) return;
        errors[error.path] = error.message;
      });

      errorsResult[key] = errors; 
    }
  });

  if(Object.entries(errorsResult).length == 0) {
    return next();
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ errorsResult });
  }

};