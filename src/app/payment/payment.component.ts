import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(private http: HttpClient) {}

  initiatePayment() {
    // Assuming you have a backend server running on http://localhost:5000
    // Replace this URL with your actual backend URL
    const backendUrl = 'http://localhost:5000/initiate-payment';

    // Example data to send to the backend
    const paymentData = {
      amount: 20000, 
      user_name : '123',
      mobilenumber : 8919278511

    };

    // Sending a POST request to initiate payment
    this.http.post<any>(backendUrl, paymentData).subscribe(
      response => {
        // Success handling - You can redirect the user to the pay page URL
        console.log('Payment initiated successfully:', response.pay_page_url);
        window.location.href = response.pay_page_url; 
      },
      error => {
       
        console.error('Error initiating payment:', error);
        
      }
    );
  }
}