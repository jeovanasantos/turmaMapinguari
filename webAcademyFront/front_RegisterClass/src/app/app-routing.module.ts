import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TurmaComponent } from './turma/turma.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  
  {path: 'dashboard', component: DashboardComponent},

  {
    path:"home", component:HomeComponent
  },

  {
    path:'turma', component: TurmaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
