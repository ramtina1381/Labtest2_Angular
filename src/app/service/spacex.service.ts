import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  // Fetch all missions
  getAllMissions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch missions filtered by launch year
  getMissionsByYear(year: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?launch_year=${year}`);
  }
  getMissionByFlightNumber(flightNumber: number): Observable<any> {
    const url = `https://api.spacexdata.com/v3/launches/${flightNumber}`;
    console.log("API Request URL:", url); // Debugging log
    return this.http.get<any>(url);
  }
  
}
