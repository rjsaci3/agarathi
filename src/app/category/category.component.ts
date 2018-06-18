import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Category } from '../model/category.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'category',
  templateUrl: 'category.component.html'
})
export class CategoryComponent implements OnInit {
  private categoriesCollection: AngularFirestoreCollection<Category>;
  private categories: Observable<Category[]>;

  constructor(
    private afs: AngularFirestore
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
}
