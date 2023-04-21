import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';
import { BookAuthor } from './Book';
import { environment } from 'src/environments/environment.development';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // public bookAuthors: BookAuthor[];
  // public editBookAuthor: BookAuthor;
  // public deleteBookAuthor: BookAuthor;

  constructor(private testService:TestService){
  }

  ngOnInit(): void {
    this.testService.getBookAuthors();
  }
  title = 'front-end';

  // public getBookAuthors(): void {
  //   this.testService.getBookAuthors().subscribe(
  //     (response: BookAuthor[]) => {
  //       this.bookAuthors = response;
  //       console.log(this.bookAuthors);
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  }


