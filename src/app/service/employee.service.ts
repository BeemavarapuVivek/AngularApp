import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModule } from '../model/employee/employee.module';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  addEmpUrl :string;
  listEmpUrl:string;
  constructor(private http:HttpClient){
      this.addEmpUrl='http://localhost:880/emp/add';
      this.listEmpUrl='http://localhost:8080/emp/list'
  }
  

  addEmploee(emp:EmployeeModule):Observable<EmployeeModule>{
    return this.http.post<EmployeeModule>(this.addEmpUrl,emp)
  }

  geAllEmployee():Observable<EmployeeModule[]>{
    return this.http.get<EmployeeModule[]>(this.listEmpUrl)
  }
}
