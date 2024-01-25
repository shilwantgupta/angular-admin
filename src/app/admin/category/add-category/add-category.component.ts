import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  constructor(private category: CategoryService, private router: Router, private sanitizer: DomSanitizer) { }
  imageName: any;
  addCategoryForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    imageSource: new FormControl('', [Validators.required])
  });

  get f() {
    return this.addCategoryForm.controls;
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageName = this.sanitize(URL.createObjectURL(file))
      console.log(this.imageName)
      this.addCategoryForm.patchValue({
        imageSource: file
      });

    }

  }
  addCategory() {
    const formData = new FormData();
    const { title, description }: any = this.addCategoryForm.value
    const imageDAta: any = this.addCategoryForm.value?.imageSource;
    formData.append('title', title)
    formData.append('description', description);
    formData.append('image', imageDAta);
    this.category.addCategory(formData).subscribe((result) => {
      console.log(result);
      if (result) {
        this.router.navigate(['/admin/categories'])
      }
    },
      (err) => {
        console.log(err)
      })
  }

}
