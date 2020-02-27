export interface Channel {
	_id: number;
	broadcaster_language: string;
	created_at: string;
	display_name: string;
	followers: number;
	game: string;
	language: string;
	logo: string;
	mature: string;
	name: string;
	partner: string;
	profile_banner: string;
	profile_banner_background_color: string;
	status: string;
	updated_at: string;
	url: string;
	video_banner: string;
	views: number;
}

export interface Follows {
	created_at: string;
	notifications: boolean;
	channel: Channel;
}

export class FollowChannels {
	_total: number;
	follows: Follows[];

}
