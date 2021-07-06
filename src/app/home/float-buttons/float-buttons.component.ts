import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageComponent } from 'src/app/message/message.component';

@Component({
  selector: 'app-float-buttons',
  templateUrl: './float-buttons.component.html',
  styleUrls: ['./float-buttons.component.scss']
})
export class FloatButtonsComponent implements OnInit {

  constructor(public dialog: MatDialog, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.closeModalMessage.subscribe(
      res => {
        this.dialog.closeAll();
      }
    )
  }

  openMessageForm() {
    this.dialog.open(MessageComponent, {
      height: 'auto',
      width: '600px',
    });
  }
}
