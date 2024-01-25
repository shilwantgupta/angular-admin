import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private _product: ProductService, private _router: Router, private _sanitizer: DomSanitizer,private _category:CategoryService) { }
  imageName: any;
  categories: any[]  = [];
  addProductForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    sortdesc:new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    imageSource: new FormControl('', [Validators.required])
  });

  get f() {
    return this.addProductForm.controls;
  }
  sanitize(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
  ngOnInit(){
    this._category.getAllCategories().subscribe((result:any)=>{
      this.categories = result.data;
    },(err)=>{
      console.log(err);
    })
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageName = this.sanitize(URL.createObjectURL(file))
      console.log(this.imageName)
      this.addProductForm.patchValue({
        imageSource: file
      });

    }
  }
  addProduct() {
    const formData = new FormData();
    const { title,category,price,quantity,sortdesc, description }: any = this.addProductForm.value
    const imageDAta: any = this.addProductForm.value?.imageSource;
    formData.append('title', title)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('quantity', quantity)
    formData.append('sortdesc', sortdesc)
    formData.append('description', description);
    formData.append('image', imageDAta);
    this._product.addProduct(formData).subscribe((result) => {
      console.log(result);
      if (result) {
        this._router.navigate(['/admin/products'])
      }
    },
      (err) => {
        console.log(err)
      })
  }
}
