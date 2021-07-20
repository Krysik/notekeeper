
class HttpError extends Error {
  statusCode: number;

  constructor(msg: string, statusCode: number) {
    super(msg);
    this.statusCode = statusCode;
  }
}

export default HttpError;
