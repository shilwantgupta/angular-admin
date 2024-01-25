import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  getCategories(page:number,pageSize:number,search:string,sort:number){
    return this.http.get(`http://localhost:8001/categories?page=${page}&pageSize=${pageSize}&sort=${sort}&q=${search}`)
  }
  getAllCategories(){
    return this.http.get(`http://localhost:8001/all-categories`);
  }
  getCategory(_id:string){
    return this.http.get(`http://localhost:8001/category/${_id}`);
  }
  addCategory(formData:any) {
    return this.http.post('http://localhost:8001/add-category', formData)
  }
  deleteCategory(_id:string){
    return this.http.delete(`http://localhost:8001/category/${_id}`)
  }
  updateCategory(formData:any,_id:string) {
    return this.http.patch(`http://localhost:8001/category/${_id}`, formData)
  }
}
