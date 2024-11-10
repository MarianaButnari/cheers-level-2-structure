import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';

export function authInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  // const authToken = inject(AuthService).getAuthToken();
  const authToken = `mySuperSecretToken`;
  // Clone the request to add the authentication header.
  const clonedRequest = request.clone({
    headers: request.headers.append('X-Authentication-Token', authToken),
  });

  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === HttpStatusCode.Unauthorized) {
        // authService => logout()
        return EMPTY;
      } else return throwError(() => error);
    })
  );
}
