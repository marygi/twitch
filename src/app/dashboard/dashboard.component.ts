import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { forkJoin, Observable } from 'rxjs';
import {map, mergeMap, startWith} from 'rxjs/operators';

import { TwitchService } from '../shared/service/twitch.service';
import { UserService } from '../shared/service/user.service';
import { User } from '../shared/model/user';
import { Game, GameData } from '../shared/model/game';
import { Stream, StreamData } from '../shared/model/stream';
import { Pagination } from '../shared/model/pagination';
import { FollowChannels, Follows } from '../shared/model/channel';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	topGames: Game[] = [];
	streams: Stream[] = [];
	follows: Follows[] = [];
	filteredTopGames: Observable<Game[]>;
	user: User;
	topGameControl = new FormControl();
	topGamesLimit = '100';
	streamPagination: Pagination;

	constructor(
			private twitchService: TwitchService,
			private userService: UserService) { }

	ngOnInit() {
		const {twitchService, userService, topGamesLimit} = this;

		forkJoin(twitchService.getUser(), twitchService.getTopGamesList({ first: topGamesLimit }))
			.pipe(
				mergeMap((res: [ User, GameData ]) => {
					this.user = res[0];
					userService.addUser(res[0]);

					this.topGames = res[1].data;
					this.filteredTopGames = this.topGameControl.valueChanges
						.pipe(
							startWith(null),
							map(game => game && typeof game === 'object' ? game.name : game),
							map(game => game ? this.filterGames(game) : this.topGames.slice())
						);

					return twitchService.getUserFollowsChannels( this.user._id );
				})
			).subscribe((res: FollowChannels) => {
				this.follows = res.follows;
		});

	}

	getStreams( event: MatAutocompleteSelectedEvent  ) {
		this.twitchService.getStreamsList( event.option.value.id )
			.subscribe((res: StreamData) => {
				this.streams = res.data;
				this.streamPagination = res.pagination;
			});
	}

	followChannel( channelId ) {
		this.twitchService.followChannel(this.user._id, channelId)
			.subscribe((res: Follows) => {
				this.follows.push(res);
			});
	}

	unfollowChannel( channelId, index ) {
		this.twitchService.unfollowChannel(this.user._id, channelId)
			.subscribe(() => {
				this.follows.splice(index, 1);
			});
	}

	private filterGames(value: string): Game[] {
		const filterValue = value.toLowerCase();

		return this.topGames.filter(game => game.name.toLowerCase().indexOf(filterValue) === 0);
	}

	displayGameName(game): string {
		return game ? game.name : game;
	}
}
