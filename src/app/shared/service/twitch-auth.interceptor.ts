import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TwitchAuthInterceptor implements HttpInterceptor {
	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		request = request.clone({
			setHeaders: {
				'Accept': 'application/vnd.twitchtv.v5+json',
				'Client-ID': '8ofmcperwkvk536dkggaiwv25jdqrd',
				'Authorization': 'OAuth ' + localStorage.getItem('token')
			}
		});

		return next.handle(request);
	}
}
