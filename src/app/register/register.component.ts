import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth: AuthService,private router:Router){}
  ngOnInit():void{
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin']);
    }
  }
}
