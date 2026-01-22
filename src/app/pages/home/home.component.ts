import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.initInventoryChart();
    this.initActivityChart();
  }

  initInventoryChart() {
    new Chart('inventoryChart', {
      type: 'bar',
      data: {
        labels: ['Electronics', 'Furniture', 'Office', 'Food', 'Others'],
        datasets: [{
          label: 'Stock Count',
          data: [120, 90, 150, 70, 40],
          backgroundColor: '#3b82f6',
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  initActivityChart() {
    new Chart('activityChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Transactions',
          data: [30, 45, 28, 60, 52, 75],
          borderColor: '#22c55e',
          backgroundColor: 'rgba(34, 197, 94, 0.15)',
          tension: 0.4,
          fill: true,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}
