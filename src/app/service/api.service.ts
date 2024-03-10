import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  baseURL: string = "http://localhost:3000/"
  userListLink: string = this.baseURL + 'userlist'
  incidentAPILInk: string = this.baseURL + "incidentEntry"

  header = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  getListOfUser(): Observable<any> {
    return this._http.get(this.userListLink);
  }

  loginUsers(body: any): Observable<any> {

    return this._http.post(this.userListLink, body, { observe: 'response', headers: this.header });
  }

  postIncidentEntry(body: any) {
    return this._http.post(this.incidentAPILInk, body, { observe: 'response', headers: this.header });
  }

  getIncidentRecord(): Observable<any> {
    return this._http.get(this.incidentAPILInk);
  }

  editIncidentReord(id: any, data: any): Observable<any> {
    return this._http.put(this.incidentAPILInk + '/' + id, data);
  }

  delteIncidentReord(id: any): Observable<any> {
    return this._http.delete(this.incidentAPILInk + '/' + id,);
  }
}
