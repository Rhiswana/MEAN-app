import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
 private apiUrl = 'https://bookfinder-pnyd.onrender.com/api/books';


  constructor(private http: HttpClient) {}

  searchBooks(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?title=${encodeURIComponent(title)}`);
  }
}
