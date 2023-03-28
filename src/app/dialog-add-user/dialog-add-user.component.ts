import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from '../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private db: AngularFirestore) {

  }

  saveUser() {
    this.user.birthDate = this.birthDate?.getTime()
    this.loading = true;
    this.db
    .collection('users')
    .add(this.user.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    })
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
