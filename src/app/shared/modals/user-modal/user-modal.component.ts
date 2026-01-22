import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-modal.component.html',
})
export class UserModalComponent {
  @Input() user: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  form = {
    id: null,
    name: '',
    email: '',
    role: 'User',
    status: 'Active'
  };

  ngOnInit() {
    if (this.user) {
      this.form = { ...this.user };
    }
  }

  submit() {
    this.save.emit(this.form);
  }
}
