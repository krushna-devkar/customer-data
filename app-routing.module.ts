import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { AddCutomerComponent } from './component/add-cutomer/add-cutomer.component';
import { UpdateCutomerComponent } from './component/update-cutomer/update-cutomer.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'customerList',component:CustomerListComponent},
  {path:'updateCustomer/:id',component:UpdateCutomerComponent},
  {path:'login' ,component:LoginSignupComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'add',loadChildren:()=>import('./add/add.module').then(res=>res.AddModule)},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
