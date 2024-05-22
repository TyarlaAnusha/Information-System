import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  url:string = "http://localhost:8080/GetProducts"; 
 
  GetProducts(): Observable<any> { 
    return this.httpClient.get<any>(this.url) 
  } 

}
