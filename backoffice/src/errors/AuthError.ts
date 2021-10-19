type TypeErros = 'auth_error' | 'expired_token';

class AuthError {
  public readonly message: string;

  public readonly status_code: number;

  public readonly type_error: string;

  constructor(message: string, type: TypeErros = 'auth_error') {
    this.message = message;
    this.status_code = 401;
    this.type_error = type;
  }
}

export { AuthError };
