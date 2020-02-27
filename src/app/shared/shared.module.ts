import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { UserService } from './service/user.service';
import { TwitchService } from './service/twitch.service';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MaterialModule
	],
	exports: [
		MaterialModule,
	],
	providers: [
		UserService,
		TwitchService
	],
})
export class SharedModule { }
