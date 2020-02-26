import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TwitchAuthInterceptor } from './shared/service/twitch-auth.interceptor';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		DashboardModule,
		SharedModule,
		LoginModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: TwitchAuthInterceptor, multi: true }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
