import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SesionStorageService } from 'src/app/core/services/sesion-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [LoginComponent, RegisterComponent]
})
export class NavBarComponent implements OnInit {
  logged = false;
  nameUser?;
  idUser?;
  auth : any= [];
  constructor(public dialog: MatDialog,
    private authService: AuthService,
    private sesionStorageService: SesionStorageService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.auth = JSON.parse(sessionStorage.getItem('current_user'));  
  
    if(this.auth){
       this.logged = true;
       this.nameUser = this.auth.user.name + ' ' + this.auth.user.last_name;
       this.idUser = this.auth.user.id_user;
    }
    this.authService.closeModalLogin.subscribe(
      res => {
        this.dialog.closeAll();
        this.logged = true;
        this.nameUser = res.name + ' ' + res.last_name;
        this.idUser = res.id_user;

      }
    );
    this.authService.closeModalRegister.subscribe(
      res => {
        this.dialog.closeAll();
      }
    )
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      height: 'auto',
      width: '400px',
    });
  }

  openRegister() {
    this.dialog.open(RegisterComponent, {
      height: 'auto',
      width: '400px',
    });
  }

  logout(){
    this.sesionStorageService.removeItem(SesionStorageService.CURRENT_USER);
    //this.authService.closeModalLogin.emit(false);
    this.logged = false;
    this.router.navigate(['/']);
  }
}
