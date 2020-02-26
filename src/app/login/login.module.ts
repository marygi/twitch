import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';


@NgModule({
	declarations: [ LoginComponent ],
	imports: [
		CommonModule,
		SharedModule
	],
	exports: [LoginComponent],
	providers: [LoginGuard]
})
export class LoginModule { }
