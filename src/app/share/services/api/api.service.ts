import {Injectable} from '@angular/core';
import {apiUrl} from "../../config/urls";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  tableRefresh = new Subject();

  constructor(private http: HttpClient) {
  }

//  GLOBAL
  listenToRefresh() {
    return this.tableRefresh.asObservable();
  }

  tableRefreshing(): void {
    // @ts-ignore
    this.tableRefresh.next();
  }

  //EMPLOYEES
  getAllEmployees() {
    return this.http.get(apiUrl.employees);
  }

  getSingleEmployee(id) {
    return this.http.get(`${apiUrl.employees}/${id}`);
  }

  createEmployee(data) {
    return this.http.post(apiUrl.create, data);
  }

  updateEmployee(data, id) {
    return this.http.put(`${apiUrl.update}/${id}`, data);
  }

  deleteEmployee(id) {
    return this.http.delete(`${apiUrl.delete}/${id}`);
  }

}
