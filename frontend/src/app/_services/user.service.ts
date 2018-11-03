import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) { }
    private api = 'http://localhost:8080/suppliers/search';

    getAll() {
        return this.http.get<User[]>('${environment.appUrl}/users');
    }
}