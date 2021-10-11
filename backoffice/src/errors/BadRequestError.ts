class BadRequestError {
  public readonly message: string;

  public readonly status_code: number;

  public readonly type_error: string;

  constructor(message: string) {
    this.message = message;
    this.status_code = 400;
    this.type_error = 'bad_request';
  }
}

export { BadRequestError };
