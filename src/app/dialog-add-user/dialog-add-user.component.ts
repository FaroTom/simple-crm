import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  
  user = new User();
  birthDate!: Date;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {

  }

  saveUser() {
    this.user.birthDate = this.birthDate?.getTime()
    console.log('current user is', this.user)
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
