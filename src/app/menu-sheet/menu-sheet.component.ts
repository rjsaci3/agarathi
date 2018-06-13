import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'menu-sheet',
  templateUrl: 'menu-sheet.component.html',
})
export class MenuSheetComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<MenuSheetComponent>,
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
