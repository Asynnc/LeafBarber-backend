class Error{
  public readonly message: string;
  public readonly statusCode: number;
  public readonly rawData?: Object;

  constructor(message: string, statusCode = 400, rawData?: Object){
    this.message = message;
    this.statusCode = statusCode;
    this.rawData = rawData;
  }
}
export default Error
