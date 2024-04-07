import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-response',
  templateUrl: './payment-response.component.html',
  styleUrl: './payment-response.component.css'
})
export class PaymentResponseComponent implements OnInit {
  transactionId?: string;
  amount?: string;
  status?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve transaction details from URL query parameters
    this.route.queryParams.subscribe(params => {
      this.transactionId = params['transaction_id'];
      this.amount = params['amount'];
      this.status = params['status'];
    });
  }
}
