import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  constructor(private router: Router, private category: CategoryService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  imageName: any = ''
  id:any;

  ngOnInit() {
    const _id: any = this.route.snapshot.paramMap.get('id')
    this.id = _id;
    this.category.getCategory(_id).subscribe((result: any) => {
      console.log(result)
      this.imageName = `${result.path}/${result.data.image}`

      this.updateCategoryForm.patchValue({
        title: result.data.title,
        description: result.data.description
      })
    }, (err) => {
      console.log(err)
    })
  }

  updateCategoryForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('',),
    imageSource: new FormControl('')
  });



  get f() {
    return this.updateCategoryForm.controls;
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageName = this.sanitize(URL.createObjectURL(file))
      this.updateCategoryForm.patchValue({
        imageSource: file
      });

    }
  }
  updateCategory() {
    const formData = new FormData();
    const { title, description }: any = this.updateCategoryForm.value
    const imageDAta: any = this.updateCategoryForm.value?.imageSource;
    formData.append('title', title)
    formData.append('description', description);
    formData.append('image', imageDAta);
    this.category.updateCategory(formData,this.id).subscribe((result) => {
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
