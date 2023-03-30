import { Component,Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private auth:AuthService){

  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit()
  }
  onLogout(){
    this.auth.logout();
  }
}
