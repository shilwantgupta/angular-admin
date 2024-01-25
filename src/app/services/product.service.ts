import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(page:number,pageSize:number,search:string,sort:number){
    return this.http.get(`http://localhost:8001/products?page=${page}&pageSize=${pageSize}&sort=${sort}&q=${search}`)
  }

  getProduct(_id:string){
    return this.http.get(`http://localhost:8001/product/${_id}`);
  }
  addProduct(formData:any) {
    return this.http.post('http://localhost:8001/add-product', formData)
  }
  deleteProduct(_id:string){
    return this.http.delete(`http://localhost:8001/product/${_id}`)
  }
  updateProduct(formData:any,_id:string) {
    return this.http.patch(`http://localhost:8001/product/${_id}`, formData)
  }

}
