import { Routes } from '@angular/router';
import { AlbumsListComponent } from './pages/albums-list/albums-list.component';
import { AlbumsDetailComponent } from './pages/albums-detail/albums-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'albums', pathMatch: 'full' },
    { path: 'albums', component: AlbumsListComponent },
    { path: 'albums/:id', component: AlbumsDetailComponent }
];
