import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookAuthor } from './Book';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  getTest(){
    this.http.get("/", {responseType:"text"}).subscribe(() =>{
      console.log("Connection works");
    })
  }

  public getBookAuthors(): Observable<BookAuthor[]> {
    return this.http.get<BookAuthor[]>(`${this.apiServerUrl}/BookAuthor/all`)
  }

  public addBookAuthor(BookAuthor: BookAuthor): Observable<BookAuthor> {
    return this.http.post<BookAuthor>(`${this.apiServerUrl}/BookAuthor/add`, BookAuthor)
  }

  public updateBookAuthor(BookAuthor: BookAuthor): Observable<BookAuthor> {
    return this.http.put<BookAuthor>(`${this.apiServerUrl}/BookAuthor/update`, BookAuthor)
  }

  public deleteBookAuthor(BookAuthorId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/BookAuthor/delete/${BookAuthorId}`)
  }
}
