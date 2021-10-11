import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-auto-main',
  templateUrl: './auto-main.component.html',
  styleUrls: ['./auto-main.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class AutoMainComponent implements OnInit {
  
  showFiller = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowText(){
    this.showFiller = !this.showFiller;
  }
}
