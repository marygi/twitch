import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user';
import { GameData } from '../model/game';
import { StreamData } from '../model/stream';
import {FollowChannels, Follows } from '../model/channel';

@Injectable()
export class TwitchService {
	constructor(private http: HttpClient) { }

	getUser(): Observable<User> {
		return this.http.get<User>('https://api.twitch.tv/kraken/user?scope=user_read');
	}

	getUserFollowsChannels(userId: string): Observable<FollowChannels> {
		return this.http.get<FollowChannels>(`https://api.twitch.tv/kraken/users/${userId}/follows/channels`);
	}

	getTopGamesList(param: { first?: string, before?: string, after?: string }): Observable<GameData> {
		return this.http.get<GameData>('https://api.twitch.tv/helix/games/top',
			{
				params: param || {},
				withCredentials: false
			});
	}

	getStreamsList(gameId: string): Observable<StreamData> {
		return this.http.get<StreamData>(`https://api.twitch.tv/helix/streams?game_id=${gameId}`);
	}

	followChannel(userId: string, channelId: string): Observable<Follows> {
		return this.http.put<Follows>(`https://api.twitch.tv/kraken/users/${userId}/follows/channels/${channelId}?scope=user_read`, {});
	}

	unfollowChannel(userId: string, channelId: string) {
		return this.http.delete(`https://api.twitch.tv/kraken/users/${userId}/follows/channels/${channelId}?scope=user_read`);
	}

}
