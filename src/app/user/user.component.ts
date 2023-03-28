import { Component } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import {MatDialog} from '@angular/material/dialog';
import { User } from '../models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User();
  allUsers = [];

  constructor(private dialog: MatDialog, private db: AngularFirestore) {

  }

  ngOnInit() {
    this.db
    .collection('users')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes) => {
      this.allUsers = changes;
    })
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent)
  }
}
