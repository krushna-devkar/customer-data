import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCutomerComponent } from '../component/add-cutomer/add-cutomer.component';

const routes: Routes = [
  {path:'addcutomer',component:AddCutomerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
