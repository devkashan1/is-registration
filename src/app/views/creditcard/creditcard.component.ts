import { Component, OnInit } from '@angular/core';
import { ToastrServices } from 'src/app/services/general/toastr.service';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.scss']
})
export class CreditcardComponent implements OnInit {

  constructor(private toastr:ToastrServices) { }
 showtoaster(){
   this.toastr.ShowError("Your card has insufficient funds.")
 }
  ngOnInit() {
  }

}
