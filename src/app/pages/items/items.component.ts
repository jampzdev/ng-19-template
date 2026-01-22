import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemModalComponent } from '../../shared/modals/item-modal/item-modal.component';

interface Item {
  id: number;
  name: string;
  code: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, ItemModalComponent],
  templateUrl: './items.component.html',
})
export class ItemsComponent {

  items: Item[] = [
    {
      id: 1,
      name: 'Wireless Mouse',
      code: 'WM-001',
      description: 'Ergonomic wireless mouse',
      image: 'https://via.placeholder.com/60'
    },
    {
      id: 2,
      name: 'Keyboard',
      code: 'KB-002',
      description: 'Mechanical keyboard',
      image: 'https://via.placeholder.com/60'
    }
  ];

  selectedItem: Item | null = null;
  isModalOpen = false;

  addItem() {
    this.selectedItem = null;
    this.isModalOpen = true;
  }

  editItem(item: Item) {
    this.selectedItem = { ...item };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveItem(item: Item) {
    if (item.id) {
      const index = this.items.findIndex(i => i.id === item.id);
      this.items[index] = item;
    } else {
      item.id = Date.now();
      this.items.push(item);
    }
    this.closeModal();
  }

  currentPage = 1;
  pageSize = 5;

  get totalPages(): number {
    return 10;
  }

  get paginatedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(start, start + this.pageSize);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

}
