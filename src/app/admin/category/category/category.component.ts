import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent {
  constructor(private category: CategoryService, private router: Router) { }
  categories: [] = []
  path: String = ''
  page = 1;
  pageSize = 10
  collectionSize = 0
  search: any = ''
  sort: number = 1
  cateColumns = ["#", "Title", "Description", "Image", "Actions"]
  ngOnInit(): void {
    this.getCategoryData(this.page, this.search, this.sort)

  }
  getCategoryData(page: number = this.page, search: any = this.search, sort: number = this.sort) {
    this.category.getCategories(page, this.pageSize, search, sort).subscribe((result: any) => {
      if (result) {
        this.categories = result.data
        this.path = result.path
        this.collectionSize = result.total;
      }
    },
      (err: Error) => {
        console.log(err.message);
      })
  }
  onSearchHandler(value: any) {
    this.getCategoryData(this.page, value, this.sort)
  }
  onPagination() {
    this.getCategoryData(this.page, this.search, this.sort)
  }
  onSortHandler(value: any) {
    this.getCategoryData(this.page, this.search, value)
  }
  onDeleteHandler(id:any){
    this.category.deleteCategory(id).subscribe((result:any)=>{
      this.getCategoryData()
    })
  }
}
