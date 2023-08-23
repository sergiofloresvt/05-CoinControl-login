import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { GraficosComponent } from './shared/graficos/graficos.component';
import { SpendformComponent } from './pages/spendform/spendform.component';
import { UserformularioComponent } from './pages/userformulario/userformulario.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio',component:DashboardComponent},
  {path: 'login', component:LoginComponent},
  {path: 'graficos', component:GraficosComponent},
  {path: 'spendform', component:SpendformComponent},
  {path: 'formulario', component: UserformularioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
