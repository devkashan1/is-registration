import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navbartoggles : boolean = false;
  constructor() { }
  navbartoggle(){
    this.navbartoggles = !this.navbartoggles
  }

  addclass() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('rtl');
  }



  
  removeclass() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('rtl');
  }
  ngOnInit() {
    $(".dropdown__Nav").hover(
      function () {
          $('>.dropdown-menu', this).stop(true, true).fadeIn(10);
          $(this).addClass('open');
      },
      function () {
          $('>.dropdown-menu', this).stop(true, true).fadeOut(10);
          $(this).removeClass('open');
      });
  }

}
