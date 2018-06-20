import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import {
  MatToolbarModule,
  MatBottomSheetModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatDialogModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { MenuSheetComponent } from './menu-sheet/menu-sheet.component';
import { ListCategoriesComponent } from './category/list/list-categories.component';
import { AddCategoryComponent } from './category/add/add-category.component';
import { EditCategoryComponent } from './category/edit/edit-category.component';

const routes: Routes = [
  {path: 'category', component: ListCategoriesComponent},
  {path: 'category/add', component: AddCategoryComponent},
  {path: 'word', component: ListCategoriesComponent},
  {path: 'word/add', component: AddCategoryComponent},
  {path: '', component: ListCategoriesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuSheetComponent,
    ListCategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDialogModule,
  ],
  entryComponents: [
    MenuSheetComponent,
    EditCategoryComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
