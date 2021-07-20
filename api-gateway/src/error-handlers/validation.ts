import HttpError from "./http";

class ValidationError extends HttpError {
  fields: { [key: string]: string | number };

  constructor(msg: string, fields: { [key: string]: string | number }, statusCode = 400) {
    super(msg, statusCode);
    this.fields = fields;
  }

}

export default ValidationError;
