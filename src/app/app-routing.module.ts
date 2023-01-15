import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishComponent } from './finish/finish.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { PickAddsComponent } from './pick-adds/pick-adds.component';
import { PersonnalInfoComponent } from './personnal-info/personnal-info.component';

const routes: Routes = [
  {path:'',component: PersonnalInfoComponent},
  {path:'perso',component: PersonnalInfoComponent},
  {path:'finish',component: FinishComponent},
  {path:'select',component: SelectPlanComponent},
  {path:'pick',component: PickAddsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
