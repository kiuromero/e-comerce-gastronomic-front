import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers : [LoginComponent, RegisterComponent]
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openLogin() {
    this.dialog.open(LoginComponent);
  }

  openRegister(){
    this.dialog.open(RegisterComponent);
  }
}
