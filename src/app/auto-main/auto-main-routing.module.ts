import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoMainComponent } from './auto-main.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { InfoComponent } from './info/info.component';
import { LegalStaffComponent } from './legal-staff/legal-staff.component';

const routes: Routes = [
  { path: '', component: AutoMainComponent, 
    children: [
    { path: 'get-started', component: GetStartedComponent },
    { path: 'info', component: InfoComponent },
    { path: 'legal-staff', component: LegalStaffComponent },
    ]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoMainRoutingModule { }
