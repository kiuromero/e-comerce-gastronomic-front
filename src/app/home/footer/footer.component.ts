import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { MessageComponent } from 'src/app/message/message.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'], 
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private authService: AuthService,
    private router : Router,
    private categoryService : CategoryService) { }

  ngOnInit(): void {
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

  openMessageForm() {
    this.dialog.open(MessageComponent, {
      height: 'auto',
      width: '600px',
    });
  }   

  reloadCategory(id, name) {
    let data = {
      id: id,
      name: name
    }
    this.categoryService.reloadCategory.emit(data);
  }
}
