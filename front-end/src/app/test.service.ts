import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  getTest(){
    this.http.get("/", {responseType:"text"}).subscribe(() =>{
      console.log("Connection works");
    })
  }
}
