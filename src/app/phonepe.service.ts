import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PhonepeService {

  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  initiatePayment(amount: number, orderId: string): Observable<any> {
    const url = `${this.baseUrl}/initiate-payment`;
    const data = { amount, order_id: orderId };
    return this.http.post(url, data);
  }

  getTransactionStatus(transactionId: string) { 
    return this.http.get(`${this.baseUrl}/callback?transactionId=${transactionId}`);
    }
}


