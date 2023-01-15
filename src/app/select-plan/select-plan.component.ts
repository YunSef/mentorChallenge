import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent {

  plan = {
    title: 'Select your plan',
    paragraph : 'You have the option of monthly or yearly billing',
    iconArcade : '../assets/images/icon-arcade.svg',
    iconAdvanced : '../assets/images/icon-advanced.svg',
    iconPro : '../assets/images/icon-pro.svg',
    priceArcade : 9,
    priceAdvenced : 12,
    pricePro : 15
  };
  constructor () {}

  ngOnInit (): void {
  }

  formatPricePerMonth (price:number) {
    let newPrice : string;
    return newPrice = `\$${price}/mo`
  } 

  formatPricePerYear (price:number){
    let newPrice : string;
    return newPrice = `\$${price*2}/yr`
  }






}
