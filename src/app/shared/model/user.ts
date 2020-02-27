export interface User {
	_id: string;
	display_name: string;
	name: string;
	type: string;
	bio: string;
	created_at: string;
	updated_at: string;
	logo: string;
	email: string;
	email_verified: boolean;
	partnered: boolean;
	twitter_connected: boolean;
	notifications: {push: boolean, email: boolean};
}
