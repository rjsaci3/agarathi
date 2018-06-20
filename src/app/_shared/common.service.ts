import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private snackBar: MatSnackBar,
  ) {}

  openSnackBar(message, action = '') {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }
}
