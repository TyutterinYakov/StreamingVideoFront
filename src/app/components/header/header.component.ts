import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _login:LoginService, private _router:Router) { }

  loginIn = false;
  ngOnInit(): void {
    this.loginIn = this._login.isLoggedIn();
  }

  logout(){
    this._login.logout();
    window.location.href="/"
  }
  goToChannel(){
    this._router.navigate(['/channel/'+this._login.getUser().userId]);
  }

}
