import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TrainerDetail } from './trainer-detail';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private apiUrl: string = "https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/" ;

  constructor(private http: HttpClient) { }

  getTrainers(): Observable<TrainerDetail[]> {
    return this.http.get<TrainerDetail[]>(this.apiUrl + "trainers.json")
  }

  getTrainer(id: string): Observable<TrainerDetail> {
    return this.http.get<TrainerDetail>(this.apiUrl + '/' + id + "/trainers.json");
  }
}
