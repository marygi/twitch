import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { UserService } from './service/user.service';
import { TwitchService } from './service/twitch.service';

import { ImageSizePipe } from './pipe/image-size.pipe';



@NgModule({
	declarations: [ImageSizePipe],
	imports: [
		CommonModule,
		MaterialModule
	],
	exports: [
		MaterialModule,
		ImageSizePipe
	],
	providers: [
		UserService,
		TwitchService
	],
})
export class SharedModule { }
