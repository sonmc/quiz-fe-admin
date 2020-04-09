import { Component, OnDestroy } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  templateUrl: 'employee.component.html',
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: false } },
  ]
})
export class EmployeeComponent implements OnDestroy {
  ngOnDestroy(): void {

  }
}
