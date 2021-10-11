import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoMainRoutingModule } from './auto-main-routing.module';
import { AutoMainComponent } from './auto-main.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import { InfoComponent } from './info/info.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LegalStaffComponent } from './legal-staff/legal-staff.component';

@NgModule({
  declarations: [
    AutoMainComponent,
    InfoComponent,
    GetStartedComponent,
    LegalStaffComponent,
  ],
  imports: [
    CommonModule,
    AutoMainRoutingModule,
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatStepperModule,
    
  ]
})
export class AutoMainModule { }
