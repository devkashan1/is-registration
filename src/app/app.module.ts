import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { PricingComponent } from './views/pricing/pricing.component';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { CreditcardComponent } from './views/creditcard/creditcard.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AccountsetupComponent } from './views/accountsetup/accountsetup.component';
import { OptionalComponent } from './views/optional/optional.component';
import { AccountcreatedComponent } from './views/accountcreated/accountcreated.component';
import { LayoutregistrationComponent } from './layoutregistration/layoutregistration.component';
import { HeaderregistrationComponent } from './layoutregistration/components/headerregistration/headerregistration.component';
import { ReciptsampleComponent } from './layoutregistration/components/reciptsample/reciptsample.component';
import { FooterregistrationComponent } from './layoutregistration/components/footerregistration/footerregistration.component';
import { SlickModule } from 'ngx-slick';
import { ToastrModule, ToastrService } from "ngx-toastr";
import { ToastrServices } from './services/general/toastr.service';
import { Signup2Component } from './signup2/signup2.component';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PricingComponent,
    SignupComponent,
    LayoutComponent,
    CreditcardComponent,
    AccountsetupComponent,
    OptionalComponent,
    AccountcreatedComponent,
    LayoutregistrationComponent,
    HeaderregistrationComponent,
    ReciptsampleComponent,
    FooterregistrationComponent,
    Signup2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    NgSelectModule,
    NgbModule,
    SlickModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: "toast-bottom-center",
      preventDuplicates: true,
      timeOut: 5000,
      progressBar: true,
      progressAnimation: "increasing",
      closeButton: true,
      toastClass: "toast mytoastr",
      enableHtml: true
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    ToastrService,
    ToastrServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
