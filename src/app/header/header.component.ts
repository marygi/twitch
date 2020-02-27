import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from '../shared/service/user.service';
import { User } from '../shared/model/user';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	user: User;
	subscription: Subscription;

	constructor(private router: Router,
				private userService: UserService) { }

	ngOnInit() {
		this.subscription = this.userService.getUser().subscribe(user => this.user = user);
	}

	logout() {
		localStorage.removeItem('token');
		this.userService.clearUser();
		this.router.navigate(['/']);
	}

}
