import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.url)
    .pipe(catchError(this.handleError));
  }

  create(resource) {
    //   return throwError(new AppError()); // use this to simulate an error
    return this.httpClient.post(this.url, JSON.stringify(resource)).pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.httpClient.put(this.url + '/' + resource.id, resource).pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.httpClient.delete(this.url + '/' + id).pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError);
    }

    return throwError(new AppError(error));
  }
}
