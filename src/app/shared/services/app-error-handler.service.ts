import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    const err = error.rejection || error;

    if (err instanceof HttpErrorResponse) {
      switch (error.status) {
        case HttpStatusCode.BadRequest:
          console.error(`Bad Request: ${error.error}`);
          break;
        // !add more errors
        default:
          console.error(`Unknown error: ${error.error}`);
      }
    }
  }
}
