import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardGuard } from './dashboard/dashboard.guard';


const routes: Routes = [
	{ path: 'dashboard', canActivate: [DashboardGuard], component: DashboardComponent},
	{ path: '**', redirectTo: '/'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
