import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  constructor(private _product: ProductService,private route:ActivatedRoute, private _router: Router, private _sanitizer: DomSanitizer, private _category: CategoryService) { }
  imageName: any = ''
  categories: any[] =[]
  id:any;

  ngOnInit() {
    const _id: any = this.route.snapshot.paramMap.get('id')
    this.id = _id;
    this._product.getProduct(_id).subscribe((result: any) => {
      console.log(result)
      this.imageName = `${result.path}/${result.data.image}`

      this.updateProductForm.patchValue({
        title: result.data.title,
        category:result.data.category,
        price: result.data.price,
        quantity:result.data.quantity,
        sortdesc:result.data.sortdesc,
        description: result.data.description
      })
    }, (err) => {
      console.log(err)
    })

    this._category.getAllCategories().subscribe((result:any)=>{
      this.categories = result.data;
    },(err)=>{
      console.log(err);
    })
  }

  updateProductForm = new FormGroup({
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
    return this.updateProductForm.controls;
  }
  sanitize(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageName = this.sanitize(URL.createObjectURL(file))
      console.log(this.imageName)
      this.updateProductForm.patchValue({
        imageSource: file
      });

    }
  }

  updateProduct(){

  }
}
