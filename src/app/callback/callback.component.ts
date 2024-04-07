import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  
  orderId: string = '';
  status: string = '';
  responseDecoded: string = '';
  xVerifyHeaders: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Extract response parameter
      const responseBase64 = params['response'];
      
      // Decode base64 response
      if (responseBase64) {
        this.responseDecoded = atob(responseBase64);
        console.log('Decoded response:', this.responseDecoded);
        
        // Parse decoded JSON
        try {
          const responseData = JSON.parse(this.responseDecoded);
          console.log('Parsed response:', responseData);

          // Extract relevant information
          this.orderId = responseData.data.merchantTransactionId || 'N/A';
          this.status = responseData.data.state || 'N/A';

          // Log X-Verify headers if present
          const xVerifyHeadersBase64 = params['x-verify'];
          if (xVerifyHeadersBase64) {
            this.xVerifyHeaders = atob(xVerifyHeadersBase64);
            console.log('X-Verify headers:', this.xVerifyHeaders);
          } else {
            console.log('X-Verify headers not present.');
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
          // Handle JSON parsing error gracefully
        }
      } else {
        console.error('Response parameter is undefined.');
        // Handle undefined response parameter gracefully
      }
    });
  }
}
