import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  months = ['January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];
  days: Array<number> = [];

  getDaysOfMonth( monthIndex: number){
    console.log(monthIndex);
    
    this.days = [];
    if(monthIndex % 2 != 0 ){
      
      for(let i=1; i<=31; i++){
        this.days.push(i);
      } 
        
    }else{
      if(monthIndex == 2)
      {
        for(let i=1; i<=28; i++){
          this.days.push(i);
        }
      }else{
        for(let i=1; i<31; i++){
          this.days.push(i);
        } 
      } 
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
