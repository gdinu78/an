import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {NavitemRespModel} from "../_models";
import {NavItemModel} from "../_models";

//.pipe(map(...))

@Injectable()
export class NavbarService {

    private api = 'http://localhost:8080/api/getNavItems';
    //private api = 'assets/data/menu.json';

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };


    constructor(private http: HttpClient) {}

    // in getNavItems trebuie sa returneze maxim 4 elemente in functie de priority
    // cumva trebuie sa duc celelalte elemente intr-o alta componenta (copilul lui  nav-item)
    getNavItems() {
        
       return this.http.get<NavitemRespModel>(this.api)
        .pipe(map((data) => {
                if (data.rc !== 0) {
                    throw(data.message);
                } else {
                    return <NavItemModel[]> data.results;
                }
                
            }
        ),
        catchError(this.handleError)
        )
       
        
    }

}