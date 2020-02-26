import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(
)
export class DashboardGuard implements CanActivate {

	constructor(private router: Router) {
	}

	private isLoggedIn() {

		if (localStorage.getItem('token')) {
			return true;
		}

		const hash = window.location.hash;
		const hashArr = hash.split('&');
		let accessToken = hashArr.find((item: string) => item.includes('access_token'));

		if (accessToken) {
			accessToken = accessToken.slice(accessToken.indexOf('=') + 1);
			localStorage.setItem('token', accessToken);

			return true;
		}

		this.router.navigate(['/']);
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
			return this.isLoggedIn();
	}
}
