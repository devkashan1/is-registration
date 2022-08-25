import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';
declare var $: any;

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
public active :boolean = false;
activetoggle(){
  this.active =! this.active
}

UsersliderControl: FormControl = new FormControl(100);

Useroptions: Options = {
  floor: 0,
  ceil: 250
};

  constructor() { }








  ngOnInit() {
   
    $('[data-toggle="popover"]').popover({
      trigger : 'hover'
  });
    $('.js_collapse').click(function () {
      $(this).toggleClass('active')

      $(this).parents('.js_collapseparent').find('.chliduserdoclist').collapse('toggle');
  });
  $('.extrafeature').click(function () {
    $(this).toggleClass("selected")

})
$('.jsUiFeatureAddon').click(function () {
    $(this).toggleClass("selected");
})

  }

}
