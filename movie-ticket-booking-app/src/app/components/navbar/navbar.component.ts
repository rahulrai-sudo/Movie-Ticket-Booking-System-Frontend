import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interface/iuser';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title= "Movies App"
  user!:IUser;
  islogin = false;
  test!:string;
  username!:string;
  constructor(private userService:UserService, private router:Router){
    //gets this current user.
    this.userService.user.subscribe(x=> this.user = x);

    if(this.user){
      this.username = this.user.userName;
    }

    this.router.routeReuseStrategy.shouldReuseRoute = () =>{return false};
  }
  ngOnInit(): void {
    // Checks if user is logged in. This changes the nav button to logout.
    if(this.user){
      this.islogin = true;
    }

  }

  logoutUser(){
    this.userService.logout();
    this.islogin = false;
  }
  loginUser(){
    this.router.navigate(['/login']);

  }

  registerUser(){
    this.router.navigate(['/register']);
  }

}
