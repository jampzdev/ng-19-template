import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModalComponent } from '../../shared/modals/user-modal/user-modal.component';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    UserModalComponent],
  templateUrl: './users.component.html',
})
export class UsersComponent {

  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@email.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@email.com', role: 'User', status: 'Inactive' },
  ];

  selectedUser: User | null = null;
  isModalOpen = false;

  openAdd() {
    this.selectedUser = null;
    this.isModalOpen = true;
  }

  openEdit(user: User) {
    this.selectedUser = { ...user };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveUser(user: User) {
    if (user.id) {
      const index = this.users.findIndex(u => u.id === user.id);
      this.users[index] = user;
    } else {
      user.id = Date.now();
      this.users.push(user);
    }
    this.closeModal();
  }
}
