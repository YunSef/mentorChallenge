import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnal-info',
  templateUrl: './personnal-info.component.html',
  styleUrls: ['./personnal-info.component.css']
})
export class PersonnalInfoComponent {

  info = {
    title : 'Personnal Info',
    paragraph: 'Please provide your Name,Mail Address and phone number',
    labels : {
      label1 : 'Name',
      label2 : 'Email Address',
      label3 : 'Phone Number',
    },
    user : {
      userName : '',
      userMail : '',
      userPhone : ''
    }
    
  }
  constructor() {}
  ngOnInit(): void {

  }

}
