import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from '../Interface/imovie';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { ICinemaSeat } from '../Interface/icinema-seats';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
  })

  export class CinemaSeatService{
  public CinemaSeat!:Observable<ICinemaSeat>;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute)// Creating a property with Variable http
  { }


//Listen what product to show.


  // Get Movies
  getCinemaSeats():Observable<any[]>{
  return this.http.get<any>(`${environment.baseUrl}/CinemaSeat`);
}

 getMovieById(id:number):Observable<IMovie>{
  return this.http.get<IMovie>(`${environment.baseUrl}/CinemaSeat/${id}`);
}
  }