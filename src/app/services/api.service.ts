import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IClient } from '../models/iclient';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>(`${environment.API_BACKEND}clients`);
  }
}
