import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardLayoutComponent } from './form-layout/dashboard-layout/dashboard-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { ItemsComponent} from './pages/items/items.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'users', component: UsersComponent },
        { path: 'items', component: ItemsComponent },

      // future:
      // { path: 'users', component: UsersComponent },
      // { path: 'settings', component: SettingsComponent },
    ],
  },
];
