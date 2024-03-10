import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { IncidententryComponent } from './pages/incidententry/incidententry.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'incidententry', component: IncidententryComponent },
    { path: '**', component: NotfoundComponent },
];
