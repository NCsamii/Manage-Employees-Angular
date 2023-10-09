import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../share/services/api/api.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Input('data') data: any;
  updateEmployeeForm: FormGroup = new FormGroup<any>({
    name: new FormControl(null, Validators.required),
    salary: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
  });

  constructor(private modalService: NgbModal, private api: ApiService) {
  }

  ngOnInit(): void {
    this.updateEmployeeForm.controls['name'].setValue(this.data['employee_name']);
    this.updateEmployeeForm.controls['salary'].setValue(this.data['employee_salary']);
    this.updateEmployeeForm.controls['age'].setValue(this.data['employee_age']);
  }

  updateEmployees(modal): void {
    this.modalService.open(modal, {size: '300px', centered: true})
  }

  submitForm() {
    this.api.updateEmployee(this.updateEmployeeForm.value, this.data.id).subscribe({
      next: (response: any) => {
        console.log('success')
        this.modalService.dismissAll();
        this.api.tableRefreshing();

      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
      }
    });
  }
}
