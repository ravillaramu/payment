import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PaymentResponseComponent } from './payment-response/payment-response.component';
import { CallbackComponent } from  "./callback/callback.component";

const routes: Routes = [
  {
    path: "payment",
    component: PaymentComponent
  },
  {
    path: "payment-responce",
    component: PaymentResponseComponent
  },
  { 
    path: 'callback', 
    component: CallbackComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
