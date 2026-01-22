import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() collapsed = false;

  isMenuOpen = false;

  constructor(private router: Router) {}


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    // later: clear token / session
    this.router.navigate(['/login']);
  }
}
