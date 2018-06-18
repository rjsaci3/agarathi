import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

import { MenuSheetComponent } from './menu-sheet/menu-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private bottomSheet: MatBottomSheet,
  ) {}

  openBottomSheet(): void {
    this.bottomSheet.open(MenuSheetComponent);
  }
}


