import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { EmployeeModule } from '../model/employee/employee.module';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  empDetails !:FormGroup;
  employeeObj :EmployeeModule =new EmployeeModule();
  emplyeeList:EmployeeModule[]=[]
  pageName:any="dashboard"
  salary:any=100000
  constructor(private formBuilder:FormBuilder,private empService:EmployeeService){

  }
  
  ngOnInit(): void {
    this.getAllEmploee()
    
    console.log("ngOnInit hook called")
    this.empDetails = this.formBuilder.group({
    name:[''],
    email:[''],
    salary:['']
    })
  }

  addEmployee(){
    console.log(this.empDetails);
    this.employeeObj.id=this.empDetails.value.id;
    this.employeeObj.name=this.empDetails.value.name;
    this.employeeObj.email=this.empDetails.value.email;
    this.employeeObj.salary=this.empDetails.value.salary;

    this.empService.addEmploee(this.employeeObj).subscribe(res=>{
    this.getAllEmploee();
    })
  }

  getAllEmploee(){
    this.empService.geAllEmployee().subscribe(res=>{
      this.emplyeeList=res;
    },err=>{
       console.log("error while fetching emp list")
    })
  }

  
}
