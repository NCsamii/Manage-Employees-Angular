import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../../share/services/api/api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employeesList: Array<any> = []
  @Input('refreshTableStatus') refreshTableStatus;
  seletedEmployee;

  constructor(private api: ApiService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getEmployees();
    this.listenToRefresh();
  }

  getEmployees(): void {
    this.api.getAllEmployees().subscribe({
      next: (response: any) => {
        this.employeesList = response.data
      },
      error: err => {
        console.log(err.error)
      },
      complete: () => {
      }
    })
  }

  listenToRefresh(): void {
    this.api.listenToRefresh().subscribe(() => {
      this.getEmployees();
    });
  }

  openModal(modal, id) {
    this.modalService.open(modal, {size: "sm", centered: true})
    this.seletedEmployee = id
  }

  submitForm() {
    this.api.deleteEmployee(this.seletedEmployee).subscribe({
      next: (response: any) => {
        console.log('success')
        this.modalService.dismissAll();
        this.getEmployees();

      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
      }
    });
  }
}
