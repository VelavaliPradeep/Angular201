import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  getUserClaims() {
    var reqHeader = new HttpHeaders({"Authorization":'Bearer ' + localStorage.getItem('userToken')});
    return  this.http.get(this.rootUrl+'/api/GetUserClaims',{ headers: reqHeader });
  }
  readonly rootUrl = 'http://localhost:51301';

  constructor(private http: HttpClient) { }

  userAuthentication(userName,password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=" +"password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded'});
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }
  
  registerUser(user : User){
    const body : User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }
  
}
