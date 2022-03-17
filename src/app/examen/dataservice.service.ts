import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./request-response";

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  users: string[] = [];

  constructor(private http: HttpClient) {
  }

  getUsers() {
    let url = "https://randomuser.me/api/?format=json&results=10&nat=en"
    return this.http.get<User>(url)
  }
}
