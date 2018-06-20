import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CommonService } from '../../_shared/common.service';
import { Category } from '../../_models/category.model';
import { EditCategoryComponent } from '../edit/edit-category.component';

@Component({
  selector: 'category',
  templateUrl: 'list-categories.component.html'
})
export class ListCategoriesComponent implements OnInit {
  categoriesCollection: AngularFirestoreCollection<Category>;
  categoryDoc: AngularFirestoreDocument<Category>;
  categories: Observable<Category[]>;

  constructor(
    private afs: AngularFirestore,
    private commonService: CommonService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.categoriesCollection = this.afs.collection<Category>('categories');
    this.categories = this.categoriesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  edit(id) {
    let dialogRef = this.dialog.open(EditCategoryComponent, {
      data: {id}
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.commonService.openSnackBar('Category updated');
    });
  }

  delete(id) {
    this.categoryDoc = this.afs.doc<Category>(`categories/${id}`);
    this.categoryDoc.delete().then(_ => {
      this.commonService.openSnackBar('Category deleted');
    });
  }
}
