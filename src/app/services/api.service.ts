import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Token = '2fcc6b47ba1714fcec28097550a1858d5ee767a4';
  constructor(private http: HttpClient) { }

  public getFact(){
    return this.http.get<any>(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`);
  }
  public getUsers(){
    return this.http.get<any>('https://api.github.com/users/QuintinJN?repos');
  }
}
