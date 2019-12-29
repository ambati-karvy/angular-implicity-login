import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
//import { Http, Response } from '@angular/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) {
  }

  //private users = User[];
  getAllUser() {
    return this.http.get("http://localhost:8080/rest/users/all");
  }

  private extractData(res: Response) {
	let body = res.json();
        return body;
  }
  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
