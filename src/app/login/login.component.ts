import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor() { }

	ngOnInit() {

	}

	login() {
		const myClientId = '8ofmcperwkvk536dkggaiwv25jdqrd';
		location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${myClientId}&redirect_uri=http://localhost:4200/dashboard&response_type=token&client_id&scope=user:edit+user:read:email+openid+user_read+user_subscriptions+user_follows_edit`;
	}

}
