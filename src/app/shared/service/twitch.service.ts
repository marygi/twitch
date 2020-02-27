import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user';

@Injectable()
export class TwitchService {
	constructor(private http: HttpClient) { }

	getUser(): Observable<User> {
		return this.http.get<User>('https://api.twitch.tv/kraken/user?scope=user_read');
	}

}
