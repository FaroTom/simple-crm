import { Component } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import {MatDialog} from '@angular/material/dialog';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User();

  constructor(private dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }
}
