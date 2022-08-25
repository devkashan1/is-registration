import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerregistration',
  templateUrl: './headerregistration.component.html',
  styleUrls: ['./headerregistration.component.scss']
})
export class HeaderregistrationComponent implements OnInit {

  constructor() { }
  addclass() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('rtl');
  }



  
  removeclass() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('rtl');
  }
  ngOnInit() {
  }

}
