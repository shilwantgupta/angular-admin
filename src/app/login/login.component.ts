import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth: AuthService,private router:Router){}
  ngOnInit():void{
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }
  faLock= faLock;
  hide = true;
  record:any
  loginForm = new FormGroup({
    email: new FormControl('kminchelle',Validators.required),
    password: new FormControl('0lelplR',Validators.required)
  })
  onVisibility(){
    this.hide = !this.hide;
  }
  onLogin(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe((result)=>{
       if(result){
        this.record = result
        this.auth.setToken(this.record.token);
        this.router.navigate(['admin']) 
       }
      },
      (err:Error)=>{
        alert(err.message);
      })
    }
    console.log(this.loginForm.value);
  }
}
