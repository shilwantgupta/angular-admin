import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private _router: Router, private _product: ProductService) { }
  products: [] = []
  path: String = ''
  page = 1;
  pageSize = 10
  collectionSize = 0
  search: any = ''
  sort: number = 1
  cateColumns = ["#", "Title", "Category", "Price", "Quantity", "Sort Desc", "Image", "Action"]
  ngOnInit() {
    
    this.getProductData(this.page, this.search, this.sort)
  }
  getProductData(page: number = this.page, search: any = this.search, sort: number = this.sort) {
    this._product.getProducts(page, this.pageSize, search, sort).subscribe((result: any) => {
      if (result) {
        this.products = result.data
        this.path = result.path
        this.collectionSize = result.total;
      }
    },
      (err: Error) => {
        console.log(err.message);
      })
  }
  onSortHandler(value:any){

  }
  onSearchHandler(value:any){

  }
  onDeleteHandler(value:any){

  }
  onPagination(){

  }


}
