import { Routes } from '@angular/router';
import { BookSearchComponent } from './components/book-search/book-search';

export const routes: Routes = [
  { path: '', component: BookSearchComponent }, 
  { path: '**', redirectTo: '' } 
];
