import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MatSnackBar } from '@angular/material'

import { Category } from '../../model/category.model';

@Component({
  selector: 'add-category',
  templateUrl: 'add-category.component.html',
})
export class AddCategoryComponent implements OnInit {
  private categoriesCollection: AngularFirestoreCollection<Category>;
  private newCategory: Category = {
    name: null,
    definition: null
  };

  constructor(
    private afs: AngularFirestore,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.categoriesCollection = this.afs.collection('categories');
  }

  addCategory() {
    this.categoriesCollection.add(this.newCategory).then(res => {
      this.newCategory = {
        name: null,
        definition: null
      };
      this.openSnackBar('Category added');
    });
  }

  openSnackBar(message, action = '') {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }
}
