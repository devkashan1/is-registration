import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  addclass() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('rtl');
  }

  slideConfig = {
    "slidesToShow": 1,
     "slidesToScroll": 1,
     prevArrow:'<button type="button" class="slick-prev">Next</button>',
     dots: true,
    };

  
  removeclass() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('rtl');
  }
  constructor() { }

  ngOnInit() {
  }

}
