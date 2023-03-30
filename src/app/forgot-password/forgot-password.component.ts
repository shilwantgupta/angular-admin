import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private auth: AuthService,private router:Router){}
  ngOnInit():void{
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }
  faLock = faLock

}
