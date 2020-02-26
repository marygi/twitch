import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MatToolbarModule,
	MatButtonModule,
	MatCardModule,
	MatGridListModule,
	MatAutocompleteModule,
	MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatGridListModule,
		MatCardModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatSlideToggleModule
	],
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatGridListModule,
		MatCardModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatSlideToggleModule
	]
})
export class MaterialModule { }
