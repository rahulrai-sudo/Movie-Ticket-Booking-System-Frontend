import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from '../Interface/imovie';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { ICinemahall } from '../Interface/icinema-hall';
import { Observable } from 'rxjs';
@Injectable({
  providedIn:'root'
  })

  export class CinemaHallService{
  public CinemaHall!:Observable<ICinemahall>;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute)// Creating a property with Variable http
  { }


//Listen what product to show.


  // Get Movies
  getCinemaHalls():Observable<any[]>{
  return this.http.get<any>(`${environment.baseUrl}/CinemaHall`);
}

 getCinemaHallById(id:number):Observable<ICinemahall>{
  return this.http.get<ICinemahall>(`${environment.baseUrl}/CinemaHall/${id}`);
}
  }