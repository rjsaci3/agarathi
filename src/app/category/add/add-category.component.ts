import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { CommonService } from '../../_shared/common.service';
import { Category } from '../../_models/category.model';

@Component({
  selector: 'add-category',
  templateUrl: 'add-category.component.html',
})
export class AddCategoryComponent implements OnInit, AfterViewInit {
  categoriesCollection: AngularFirestoreCollection<Category>;
  newCategory: Category = {
    name: null,
    definition: null
  };

  @ViewChild('nameInput') nameInput;

  constructor(
    private afs: AngularFirestore,
    private commonService: CommonService,
  ) {}

  ngOnInit() {
    this.categoriesCollection = this.afs.collection('categories');
  }

  ngAfterViewInit() {
    // this.nameInput.nativeElement.focus();
  }

  addCategory() {
    this.categoriesCollection.add(this.newCategory).then(res => {
      this.newCategory = {
        name: null,
        definition: null
      };
      this.commonService.openSnackBar('Category added');
    });
  }
}
