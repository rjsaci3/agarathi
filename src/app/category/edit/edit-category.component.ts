import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Category } from '../../_models/category.model';

@Component({
  selector: 'edit-category',
  templateUrl: 'edit-category.component.html',
})
export class EditCategoryComponent implements OnInit {
  categoryDoc: AngularFirestoreDocument<Category>;
  category: Category = {
    name: null,
    definition: null
  };

  constructor(
    private afs: AngularFirestore,
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    this.categoryDoc = this.afs.doc(`categories/${this.data.id}`);
    this.categoryDoc.valueChanges().subscribe(data => {
      this.category = data;
    })
  }

  updateCategory(category: Category) {
    this.categoryDoc.update(category).then(res => {
      this.dialogRef.close();
    });
  }
}
