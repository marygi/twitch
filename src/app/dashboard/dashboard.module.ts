import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardGuard } from './dashboard.guard';



@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		DashboardComponent
	],
	providers: [
		DashboardGuard
	]
})
export class DashboardModule { }
