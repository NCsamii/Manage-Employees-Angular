import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../share/services/api/api.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  addNewEmployeeForm: FormGroup = new FormGroup<any>({
    name: new FormControl(null, Validators.required),
    salary: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
  });

  constructor(private modalService: NgbModal, private api: ApiService) {
  }

  ngOnInit(): void {
  }

  createEmployee(modal): void {
    this.modalService.open(modal, {size: '300px', centered: true})
  }

  submitForm() {
    this.api.createEmployee(this.addNewEmployeeForm.value).subscribe({
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
