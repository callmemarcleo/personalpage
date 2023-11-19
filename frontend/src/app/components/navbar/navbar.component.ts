// navbar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;

    if (!checkbox.checked) {
      this.closeMenu();
    }
  }

  closeMenu(): void {
    const checkbox = document.getElementById('active') as HTMLInputElement;
    checkbox.checked = false;
  }
}
