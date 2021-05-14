import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(public dialog: MatDialog,
    private authService: AuthService,
    private sesionStorageService: SesionStorageService
  ) { }

  ngOnInit(): void {
    let auth = sessionStorage.getItem('current_user');
    console.log(auth)
    if(auth){
       this.logged = true;
    }
    this.authService.closeModalLogin.subscribe(
      res => {
        this.dialog.closeAll();
        this.logged = res;
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
    this.authService.closeModalLogin.emit(false);
  }
}
