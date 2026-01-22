import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-modal.component.html',
})
export class ItemModalComponent {

  @Input() item: any = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  form = {
    id: null,
    name: '',
    code: '',
    description: '',
    image: ''
  };

  ngOnInit() {
    if (this.item) {
      this.form = { ...this.item };
    }
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.form.image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  submit() {
    this.save.emit(this.form);
  }
}
