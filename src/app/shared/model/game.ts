import { Pagination } from './pagination';

export interface Game {
	id: string;
	name: string;
	box_art_url: string;
}

export class GameData {
	data: Game[];
	pagination: Pagination;
}
