import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { User } from '../model/user';

@Injectable()
export class UserService {
	private userSubject = new Subject<User>();

	addUser(user: User) {
		this.userSubject.next(user);
	}

	getUser(): Observable<User> {
		return this.userSubject.asObservable();
	}

	clearUser() {
		this.userSubject.next();
	}
}
