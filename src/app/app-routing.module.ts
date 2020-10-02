import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDesignerComponent } from './form-designer/form-designer.component';

const routes: Routes = [
  {path:'home', component:FormDesignerComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
