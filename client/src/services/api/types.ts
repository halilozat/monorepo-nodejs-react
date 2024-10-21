export interface ApiSuccessResponse<D> {
  meta: any[];
  id?: any;
  success: true;
  message: string;
  data: D;
}

export interface ApiErrorResponse {
  message: string;
  code?: number;
  success?: false;
  errors?: any;
}

export const isApiErrorResponse = (
  response: any,
): response is ApiErrorResponse => !response.success;

export class ApiError extends Error {
  public name: string;

  public code: number;

  public errors?: any;

  public response: ApiErrorResponse;

  constructor(response: ApiErrorResponse) {
    if (response.errors) {
      const errorMessages: string[] = Object.values(response.errors);
      let errorMessage = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < errorMessages.length; i++) {
        errorMessage += `${errorMessages[i]}\n`;
      }
      super(errorMessage);
    } else {
      super(response.message);
    }
    this.name = 'ApiError';
    this.code = response.code || 400;
    this.response = response;
    this.errors = response.errors || {};
  }
}

export const isApiError = (error: any): error is ApiError =>
  error instanceof ApiError;
