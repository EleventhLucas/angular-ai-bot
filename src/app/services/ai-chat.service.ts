import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private endpoint = 'https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct';
  private apiToken = environment.hfToken;

  constructor(private http: HttpClient) {}

  generateResponse(prompt: string): Observable<any> {
    console.log('Prompt sent:', prompt);
    console.log('Token used (first 6 chars):', this.apiToken?.slice(0, 6));
    console.log('API Endpoint:', this.endpoint);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.endpoint, { inputs: prompt }, { headers });
  }
}
