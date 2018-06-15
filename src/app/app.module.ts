import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {
  MatToolbarModule,
  MatBottomSheetModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { MenuSheetComponent } from './menu-sheet/menu-sheet.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add/add-category.component';

const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'category/add', component: AddCategoryComponent},
  {path: 'word', component: AddCategoryComponent},
  {path: 'word/add', component: AddCategoryComponent},
  {path: '', component: AddCategoryComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuSheetComponent,
    CategoryComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatBottomSheetModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  entryComponents: [
    MenuSheetComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
