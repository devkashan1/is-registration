import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './views/pricing/pricing.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { CreditcardComponent } from './views/creditcard/creditcard.component';
import { AccountsetupComponent } from './views/accountsetup/accountsetup.component';
import { AccountcreatedComponent } from './views/accountcreated/accountcreated.component';
import { LayoutregistrationComponent } from './layoutregistration/layoutregistration.component';
import { OptionalComponent } from './views/optional/optional.component';
import { Signup2Component } from './signup2/signup2.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: 'pricing',
        component: PricingComponent
      }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },{
    path: 'create',
    component: Signup2Component
  },

  {
    path: '',
    component: LayoutregistrationComponent,
    children:[
  
  {
    path: 'billing',
    component: CreditcardComponent
  },
  {
    path: 'accountsetup',
    component: AccountsetupComponent
  },
  {
    path: 'accountcreated',
    component: AccountcreatedComponent
  },
  {
    path: 'configuration',
    component: OptionalComponent
  }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
