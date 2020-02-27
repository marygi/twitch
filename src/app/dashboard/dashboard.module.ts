import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardGuard } from './dashboard.guard';
import { SharedModule } from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	],
	exports: [
		DashboardComponent
	],
	providers: [
		DashboardGuard
	]
})
export class DashboardModule { }
