import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramComponent } from './program/program.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'CMS Home',component:HomeComponent},
  {path:'PMS',component:ProgramComponent},
  {path:'',redirectTo:'CMS Home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
