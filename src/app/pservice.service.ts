import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Istudent } from './PracticeClass'
@Injectable({
  providedIn: 'root'
})
export class PserviceService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = 'http://localhost:3000';
  createUserData(st) {
    return this.http.post(this.baseUrl + '/Add', st);
  }
  // login(st)
  // {
  //   return this.http.post(this.baseUrl + '/userLogin',st);
  // }
  signup(st) {

    return this.http.post(this.baseUrl + '/SignUp', st);

  }
  login(st) {
    return this.http.post(this.baseUrl + '/userLogin', st);
  }
  logout() {
    localStorage.clear();
  }
  addTechData(td) {
    return this.http.post(this.baseUrl + '/addTech', td);
  }
  readTechData() {
    return this.http.get(this.baseUrl + '/readTech');
  }
}
