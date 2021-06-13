import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { CategoryService } from '../../containers/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  category : any = {
    name:"",
    description:""
  }
  categories: any;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.get()
    .then(res => {
      if (SUCCESS_STATUS == res['status']) {
        this.categories = res['data'];
      }
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
  openModalCreate = () => { 
    this.modalCreate.show();
  }
}
